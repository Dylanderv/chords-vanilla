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
  handleInstrumentClick(ukuleleChords.keys.map(element => {
    return {
      name: element,
      parameter: element
    }
  }), handleUkuleleChordTypeClick);
}

function handleUkuleleChordTypeClick(chord: string) {
  console.log(chord);
  handleChordTypeClick(chord, ukuleleChords.suffixes.map(suffix => {
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
  console.log(chordToRender);
  handleChordClick(chord.chord + chord.suffix, initUkuleleRender, [chordToRender]);
}
