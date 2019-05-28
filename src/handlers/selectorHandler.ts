import { resetSelector, addElementToSelector, addSeparator, removeClassForAllIn, addClassToElement } from "../helpers/selectorHelper";
import { getFrChord } from "../helpers/chordEnFr";
import { initPiano } from "./pianoHandler";
import { initUkulele } from "./ukuleleHandler";

let _instrumentSelector: HTMLDivElement = null;
let _chordShow: HTMLDivElement = null;
let _chordSelector: HTMLDivElement = null;
let _chordTypeSelector: HTMLDivElement = null;

export function init(instrumentSelector: HTMLDivElement, chordTypeSelector: HTMLDivElement, chordSelector: HTMLDivElement, chordShow: HTMLDivElement) {
  _instrumentSelector = instrumentSelector;
  _chordTypeSelector = chordTypeSelector;
  _chordSelector = chordSelector;
  _chordShow = chordShow;
}

export function initInstrumentSelector() {
  addElementToSelector(_instrumentSelector, 'Piano', "instrument", "Piano", initPiano, null);
  addElementToSelector(_instrumentSelector, 'Ukulele', "instrument", "Ukulele", initUkulele, null);
}

export function handleInstrumentClick(instrument, chordTypeInit: {name: string, parameter: any}[], onClickHandler: Function) {
  removeClassForAllIn(_instrumentSelector, "selected");
  addClassToElement(document.getElementById(instrument), 'selected');
  resetSelector(_chordTypeSelector, "separator");
  resetSelector(_chordTypeSelector, 'chordType');
  for (let index = 0; index < chordTypeInit.length; index++) {
    const chordName = chordTypeInit[index];
    addElementToSelector(_chordTypeSelector, getFrChord(chordName.name), "chordType", chordName.name, onClickHandler, chordName.parameter);
    if (index !== chordTypeInit.length - 1) addSeparator(_chordTypeSelector);
  }
}

export function handleChordTypeClick(newTypeSelected: string, chordsInit: {name: string, parameter: any}[], onClickHandler: Function) {
  removeClassForAllIn(_chordTypeSelector, "selected");
  addClassToElement(document.getElementById(newTypeSelected), 'selected');
  resetSelector(_chordSelector, 'chord');
  resetSelector(_chordSelector, "separator");
  for (let index = 0; index < chordsInit.length; index++) {
    const chord = chordsInit[index];
    addElementToSelector(_chordSelector, getFrChord(chord.name), "chord", chord.name, onClickHandler, chord.parameter);
    if (index !== chordsInit.length - 1) addSeparator(_chordSelector);
  }
}

export function handleChordClick(newChordSelected: string, renderFunction: Function, parameter: any[]) {
  removeClassForAllIn(_chordSelector, "selected");
  addClassToElement(document.getElementById(newChordSelected), 'selected');
  renderFunction(_chordShow, ...parameter);
}
