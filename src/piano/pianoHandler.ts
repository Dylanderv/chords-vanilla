import { IPianoChordsType } from "../model/IPianoChordsType";
import { getAllPianoChords } from "../helpers/pianoChordsHelper";
import { IChord } from "../model/IChord";
import { resetSelector, addElementToSelector, addSeparator } from "../helpers/selectorHelper";

let _chordShow: HTMLDivElement = null;
let _chordSelector: HTMLDivElement = null;
let _chordTypeSelector: HTMLDivElement = null;
let pianoChordsTypeList: IPianoChordsType[] = null;


export function initPiano(chordTypeSelector: HTMLDivElement, chordSelector: HTMLDivElement, chordShow: HTMLDivElement) {
  _chordTypeSelector = chordTypeSelector;
  _chordSelector = chordSelector;
  _chordShow = chordShow;
  pianoChordsTypeList = getAllPianoChords();
  initChordTypeSelector();
}

function initChordTypeSelector() {
  resetSelector(_chordTypeSelector, 'chordType');
  for (let index = 0; index < pianoChordsTypeList.length; index++) {
    const pianoChordsType = pianoChordsTypeList[index];
    addElementToSelector(_chordTypeSelector, pianoChordsType.type, "chordType", handleChordTypeClick, pianoChordsType);
    if (index !== pianoChordsTypeList.length - 1) addSeparator(_chordTypeSelector);
  }
}

function handleChordTypeClick(type: IPianoChordsType) {
  resetSelector(_chordSelector, 'chord');
  resetSelector(_chordSelector, "separator");
  let chords = type.chords;
  for (let index = 0; index < chords.length; index++) {
    const pianoChord = chords[index];
    addElementToSelector(_chordSelector, pianoChord.name, "chord", handleChordClick, pianoChord);
    if (index !== chords.length - 1) addSeparator(_chordSelector);
  }
}

function handleChordClick(chord: IChord) {
  console.log(chord)
}