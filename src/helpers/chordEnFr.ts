const correspondanceEnFr = {
  "C": "Do",
  "D": "Ré",
  "E": "Mi",
  "F": "Fa",
  "G": "Sol",
  "A": "La",
  "B": "Si"
}

const correspondanceFrEn = {
  "Do": "C",
  "Ré": "D",
  "Mi": "E",
  "Fa": "F",
  "Sol": "G",
  "La": "A",
  "Si": "B"
}

let chordLang: "fr"|"en" = "fr"
let _langSelector: HTMLDivElement = null;
let _langSelectorButton: HTMLButtonElement = null;

export function initLangButton(langSelector: HTMLDivElement) {
  _langSelector = langSelector;
  _langSelectorButton = document.createElement('button');
  _langSelectorButton.innerHTML = chordLang === "fr" ? "en" : "fr";
  _langSelector.appendChild(_langSelectorButton);
  _langSelectorButton.addEventListener("click", () => setChordLang(chordLang === "fr" ? "en" : "fr") )
}

export function getFrChord(enChord: string) {
  let frMain = correspondanceEnFr[enChord.charAt(0)];
  return frMain + enChord.substring(1);
}

export function getChord(baseChord: string) {
  if (chordLang === "fr") {
    return getFrChord(baseChord);
  } else {
    return baseChord;
  }
}

function setChordLang(newLang: "fr"|"en") {
  chordLang = newLang;
  _langSelectorButton.innerHTML = chordLang === "fr" ? "en" : "fr";
}