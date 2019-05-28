import { IPianoChordsType } from "../model/IPianoChordsType";
import { getAllPianoChords } from "../helpers/chordsHelper";
import { IChord } from "../model/IChord";
import { renderSvg } from "./pianoSvgHandler";
import { handleInstrumentClick, handleChordTypeClick, handleChordClick } from "./selectorHandler";

let pianoChordsTypeList: IPianoChordsType[] = null;

export function initPiano() {
  pianoChordsTypeList = getAllPianoChords();
  initPianoChordTypeSelector();
}

function initPianoChordTypeSelector() {
  handleInstrumentClick('Piano', pianoChordsTypeList.map(element => {
    return {
      name: element.type,
      parameter: element
    }
  }), handlePianoChordTypeClick);
}

function handlePianoChordTypeClick(type: IPianoChordsType) {
  handleChordTypeClick(type.type, type.chords.map(chord => {
    return {
      name: chord.name,
      parameter: chord
    }
  }), handlePianoChordClick);
}

function handlePianoChordClick(chord: IChord) {
  handleChordClick(chord.name, renderSvg, [chord]);
}
