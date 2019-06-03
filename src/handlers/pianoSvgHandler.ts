import { PianoSVG } from '../svg/PianoKeyboard';
import { IChord } from '../model/IChord';

const Serializer = new XMLSerializer();
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

export function renderSvg(element: HTMLDivElement, chord: IChord) {
  const piano = new DOMParser().parseFromString(PianoSVG, 'text/xml');
  // La première touche est forcément sur le premier octave
  let firstKey = chord.keys[0].name;
  if (blackListBlackKeys.includes(firstKey)) {
    firstKey = corBlackKeysEn[firstKey];
  }
  let keyToSelect = "octave-1-" + firstKey + "-key";
  piano.getElementById(keyToSelect).setAttribute("fill", "#ff0000");
  let isOctave2 = false;
  for (let i = 1; i < chord.keys.length; i ++) {
    let currentKey = chord.keys[i].name;
    if (!isOctave2 && keyOrder[firstKey.charAt(0)] > keyOrder[currentKey.charAt(0)]) {
      isOctave2 = true;
    }
    if (blackListBlackKeys.includes(currentKey)) {
      currentKey = corBlackKeysEn[currentKey];
    }
    keyToSelect = isOctave2 ? "octave-2-" : "octave-1-"
    keyToSelect += currentKey + "-key";
    piano.getElementById(keyToSelect).setAttribute("fill", "#ff0000");
  }
  element.innerHTML = Serializer.serializeToString(piano);
}