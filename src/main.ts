import { initPiano } from "./handlers/pianoHandler";
import { init, initInstrumentSelector } from "./handlers/selectorHandler";

const instrumentSelector = document.getElementById('instrumentSelector') as HTMLDivElement;
const chordTypeSelector = document.getElementById('chordTypeSelector') as HTMLDivElement;
const chordSelector = document.getElementById('chordSelector') as HTMLDivElement;
const chordShow = document.getElementById('chordShow') as HTMLDivElement;
init(instrumentSelector, chordTypeSelector, chordSelector, chordShow);
initInstrumentSelector();
