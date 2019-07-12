import { getAllUkuleleChords } from "../../helpers/chordsHelper";
import { IUkuleleChords } from "../../model/IUkuleleChords";
import { handleChordClick } from "../selectorHandler";
import { IUkuleleChord } from "../../model/IUkuleleChord";
import { initUkuleleRender } from "./ukuleleSvgHandler";
import { initChordsDbChordTypeSelector, handleChordsDbChordTypeClick } from "../chordsDbHandler";

let ukuleleChords: IUkuleleChords = null;

/**
 * Initialise les accords pour le Ukulele
 */
export function initUkulele() {
  // Initialise les accords ukulele
  ukuleleChords = getAllUkuleleChords();
  initUkuleleChordTypeSelector();
}

/**
 * Initialise la liste des chordTypes
 */
function initUkuleleChordTypeSelector() {
  // Initialise la liste des chordTypes
  initChordsDbChordTypeSelector('Ukulele', ukuleleChords, handleUkuleleChordTypeClick);
}

/**
 * Permet de mettre à jour le selecteur de chord
 * @param chord chordType sur lequel on vient de cliquer
 */
function handleUkuleleChordTypeClick(chord: string) {
  // Met à jour la liste des accords en fonction du chordType
  handleChordsDbChordTypeClick(chord, ukuleleChords, handleUkuleleChordClick);
}

/**
 * Permet d'afficher le chord
 * @param chord chord sur lequel on vient de cliquer
 */
function handleUkuleleChordClick(chord: {chord: string, suffix: string}) {
  // Affiche l'accord
  let chordToRender = (ukuleleChords.chords[chord.chord] as IUkuleleChord[]).find(ukuleleChord => ukuleleChord.suffix === chord.suffix);
  handleChordClick("chord" + chord.chord + chord.suffix, initUkuleleRender, [chordToRender]);
}
