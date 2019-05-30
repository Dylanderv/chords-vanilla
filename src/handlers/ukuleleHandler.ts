import { getAllUkuleleChords } from "../helpers/chordsHelper";
import { IUkuleleChords } from "../model/IUkuleleChords";
import { handleInstrumentClick, handleChordTypeClick, handleChordClick } from "./selectorHandler";
import { IUkuleleChord } from "../model/IUkuleleChord";
import { initUkuleleRender } from "./ukuleleSvgHandler";

let ukuleleChords: IUkuleleChords = null;

export function initUkulele() {
  ukuleleChords = getAllUkuleleChords();
  initUkuleleChordTypeSelector();
}

function initUkuleleChordTypeSelector() {
  handleInstrumentClick('Ukulele', ukuleleChords.keys.map(element => {
    return {
      name: element,
      parameter: element
    }
  }), handleUkuleleChordTypeClick);
}

function handleUkuleleChordTypeClick(chord: string) {
  handleChordTypeClick("type" + chord, ukuleleChords.suffixes.map(suffix => {
    return {
      name: chord + suffix,
      parameter: {
        "chord": chord,
        "suffix": suffix
      }
    }
  }), handleUkuleleChordClick);
}

function handleUkuleleChordClick(chord: {chord: string, suffix: string}) {
  let chordToRender = (ukuleleChords.chords[chord.chord] as IUkuleleChord[]).find(ukuleleChord => ukuleleChord.suffix === chord.suffix);
  handleChordClick("chord" + chord.chord + chord.suffix, initUkuleleRender, [chordToRender]);
}
