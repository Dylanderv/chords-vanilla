import { PianoSVG } from '../../svg/PianoKeyboard';
import { IChord } from '../../model/IChord';

const Serializer = new XMLSerializer();

// Nécessaire pour traduire les accords du json aux noms utilisés dans le json
const blackListBlackKeys: string[] = ["D♭", "E♭", "G♭", "A♭", "B♭"]
const corBlackKeysEn = {
  "C#": "D♭", 
  "D♭": "C#",
  "D#": "E♭", 
  "E♭": "D#",
  "F#": "G♭", 
  "G♭": "F#",
  "G#": "A♭", 
  "A♭": "G#",
  "A#": "B♭", 
  "B♭": "A#",
};

// Ordre des notes nécessaire pour la selection de l'octave
const keyOrder = {
  C: 1,
  "C#": 2,
  D: 3,
  "D#": 4,
  E: 5,
  F: 6,
  "F#": 7,
  G: 8,
  "G#": 9,
  A: 10,
  "A#": 11,
  B: 12
}

/**
 * Permet de générer un SVG dans `element` affichant l'accord `chord`
 * @param element Element dans lequel afficher le SVG
 * @param chord chord à afficher
 */
export function renderSvg(element: HTMLDivElement, chord: IChord) {
  const piano = new DOMParser().parseFromString(PianoSVG, 'text/xml');
  // Initialisation pour la première touche
  let firstKey = chord.keys[0].name;
  // Si le nom de l'accord ne correspond pas au nom dans le svg on le traduit
  if (blackListBlackKeys.includes(firstKey)) {
    firstKey = corBlackKeysEn[firstKey];
  }
  // Selection de la touche (la première touche est forcément sur le premier octave)
  let keyToSelect = "octave-1-" + firstKey + "-key";
  piano.getElementById(keyToSelect).setAttribute("fill", "#ff0000");
  // Variable permettant de gérer les octaves
  let isOctave2 = false;
  // Pour toutes les autres touches
  for (let i = 1; i < chord.keys.length; i ++) {
    let currentKey = chord.keys[i].name;
    // Si on était sur le premier octave et que la prochaine touche doit être sur le prochain octave
    if (!isOctave2 && keyOrder[firstKey.charAt(0)] > keyOrder[currentKey.charAt(0)]) {
      // On met à jour la variable d'octave
      isOctave2 = true;
    }
    // Traduction de la note de la touche
    if (blackListBlackKeys.includes(currentKey)) {
      currentKey = corBlackKeysEn[currentKey];
    }
    keyToSelect = isOctave2 ? "octave-2-" : "octave-1-"
    keyToSelect += currentKey + "-key";
    // Selection et mise à jour de la couleur de la touche
    piano.getElementById(keyToSelect).setAttribute("fill", "#ff0000");
  }
  // On applique le svg sur notre element
  element.innerHTML = Serializer.serializeToString(piano);
}