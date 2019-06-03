import { init, initInstrumentSelector } from "./handlers/selectorHandler";
import { initLangButton } from "./helpers/chordEnFr";

const langSelector = document.getElementById('langSelector') as HTMLDivElement;
const instrumentSelector = document.getElementById('instrumentSelector') as HTMLDivElement;
const chordTypeSelector = document.getElementById('chordTypeSelector') as HTMLDivElement;
const chordSelector = document.getElementById('chordSelector') as HTMLDivElement;
const chordShow = document.getElementById('chordShow') as HTMLDivElement;
initLangButton(langSelector);
init(instrumentSelector, chordTypeSelector, chordSelector, chordShow);
initInstrumentSelector();
