import { getAllGuitarChords } from "../../helpers/chordsHelper";
import { handleInstrumentClick, handleChordTypeClick, handleChordClick } from "../selectorHandler";
import { IGuitarChord } from "../../model/IGuitarChord";
import { IGuitarChords } from "../../model/IGuitarChords";
import { initGuitarRender } from "./guitarSvgHandler";

let guitarChords: IGuitarChords = null;

export function initGuitar() {
  guitarChords = getAllGuitarChords();
  initGuitarChordTypeSelector();
}

function initGuitarChordTypeSelector() {
  handleInstrumentClick('Guitar', guitarChords.keys.map(element => {
    return {
      name: element,
      parameter: element
    }
  }), handleGuitarChordTypeClick);
}

function handleGuitarChordTypeClick(chord: string) {
  handleChordTypeClick("type" + chord, guitarChords.suffixes.map(suffix => {
    return {
      name: chord + suffix,
      parameter: {
        "chord": chord,
        "suffix": suffix
      }
    }
  }), handleGuitarChordClick);
}

function handleGuitarChordClick(chord: {chord: string, suffix: string}) {
  let chordToRender = (guitarChords.chords[chord.chord] as IGuitarChord[]).find(guitarChord => guitarChord.suffix === chord.suffix);
  console.log(chordToRender);
  handleChordClick("chord" + chord.chord + chord.suffix, initGuitarRender, [chordToRender]);
}
