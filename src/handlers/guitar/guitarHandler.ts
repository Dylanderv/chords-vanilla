import { getAllGuitarChords } from "../../helpers/chordsHelper";
import { handleChordClick } from "../selectorHandler";
import { IGuitarChord } from "../../model/IGuitarChord";
import { IGuitarChords } from "../../model/IGuitarChords";
import { initGuitarRender } from "./guitarSvgHandler";
import { initChordsDbChordTypeSelector, handleChordsDbChordTypeClick } from "../chordsDbHandler";

let guitarChords: IGuitarChords = null;

/**
 * Initialise les accords guitare
 */
export function initGuitar() {
  // Initialise les accords guitare
  guitarChords = getAllGuitarChords();
  initGuitarChordTypeSelector();
}

/**
 * Initialise la liste des chordTypes
 */
function initGuitarChordTypeSelector() {
  // Initialise la liste des chordTypes
  initChordsDbChordTypeSelector('Guitar', guitarChords, handleGuitarChordTypeClick);
}

/**
 * Permet de mettre à jour la liste des chord
 * @param chord chordType sur lequel on vient de cliquer
 */
function handleGuitarChordTypeClick(chord: string) {
  // Met à jour la liste des accords en fonction du chordType
  handleChordsDbChordTypeClick(chord, guitarChords, handleGuitarChordClick);
}

/**
 * Permet d'affiche le chord selectionné
 * @param chord chord sur lequel on vient de cliquer
 */
function handleGuitarChordClick(chord: {chord: string, suffix: string}) {
  // Affiche l'accord
  let chordToRender = (guitarChords.chords[chord.chord] as IGuitarChord[]).find(guitarChord => guitarChord.suffix === chord.suffix);
  handleChordClick("chord" + chord.chord + chord.suffix, initGuitarRender, [chordToRender]);
}
