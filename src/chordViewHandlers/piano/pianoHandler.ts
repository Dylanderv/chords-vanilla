import { IPianoChordsType } from "../../model/IPianoChordsType";
import { getAllPianoChords } from "../../helpers/chordsHelper";
import { IChord } from "../../model/IChord";
import { renderSvg } from "./pianoSvgHandler";
import { handleInstrumentClick, handleChordTypeClick, handleChordClick } from "../selectorHandler";

let pianoChordsTypeList: IPianoChordsType[] = null;

/**
 * Initialise les accords pour le piano
 */
export function initPiano() {
  // Récupération des accords
  pianoChordsTypeList = getAllPianoChords();
  // Initialisation du selecteur
  initPianoChordTypeSelector();
}

/**
 * Initialise le selecteur de chordType
 */
function initPianoChordTypeSelector() {
  handleInstrumentClick('Piano', pianoChordsTypeList.map(element => {
    return {
      name: element.type,
      parameter: element
    }
  }), handlePianoChordTypeClick);
}

/**
 * Permet de mettre à jour la liste des chords
 * @param type chordType sur lequel on vient de cliquer
 */
function handlePianoChordTypeClick(type: IPianoChordsType) {
  handleChordTypeClick("type" + type.type, type.chords.map(chord => {
    return {
      name: chord.name,
      parameter: chord
    }
  }), handlePianoChordClick);
}

/**
 * Permet d'affiche le chord selectionné
 * @param chord chord sur lequel on vient de cliquer
 */
function handlePianoChordClick(chord: IChord) {
  handleChordClick("chord" + chord.name, renderSvg, [chord]);
}
