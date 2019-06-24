import { handleInstrumentClick, handleChordTypeClick } from "./selectorHandler";
import { IUkuleleChords } from "../model/IUkuleleChords";
import { IGuitarChords } from "../model/IGuitarChords";

// Handler pour les json venant du dépot github chordsDb (Ukulele et Guitare)
// https://github.com/tombatossals/chords-db/tree/master/lib

/**
 * Permet d'initialiser le selecteur de ChordType pour les JSON du github `chords-db`
 * @param instrument Spécifie l'instrument le nouvel instrument (nécessaire pour la coloration)
 * @param chords Liste des chords
 * @param chordTypeClickFunction Fonction à exécuter lors d'un click
 */
export function initChordsDbChordTypeSelector(instrument: "Ukulele" | "Guitar", chords: IUkuleleChords | IGuitarChords, chordTypeClickFunction: Function) {
  // Initialise le selecteur de chordType et ajoute les eventListener sur les boutons
  handleInstrumentClick(instrument, chords.keys.map(element => {
    return {
      name: element,
      parameter: element
    }
  }), chordTypeClickFunction);
}

/**
 * Permet de gérer lorsque l'on clique sur un chordType pour les JSON du github `chords-db`
 * @param chord chords sur lequel on vient de cliquer (nécessaire pour la coloration)
 * @param chords Liste des chords
 * @param chordClickFunction Fonction à exécuter lors d'un click
 */
export function handleChordsDbChordTypeClick(chord: string, chords: IUkuleleChords | IGuitarChords, chordClickFunction: Function) {
  // Est exécuté lorsque l'on clique sur un chordType
  // Met à jour la liste accords disponibles
  handleChordTypeClick("type" + chord, chords.suffixes.map(suffix => {
    return {
      name: chord + suffix,
      parameter: {
        "chord": chord,
        "suffix": suffix
      }
    }
  }), chordClickFunction);
}
