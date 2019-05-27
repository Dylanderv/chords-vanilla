import { initPiano } from "./piano/pianoHandler";

const instrumentSelector = document.getElementById('instrumentSelector') as HTMLDivElement;
const chordTypeSelector = document.getElementById('chordTypeSelector') as HTMLDivElement;
const chordSelector = document.getElementById('chordSelector') as HTMLDivElement;
const chordShow = document.getElementById('chordShow') as HTMLDivElement;
initPiano(chordTypeSelector, chordSelector, chordShow);
