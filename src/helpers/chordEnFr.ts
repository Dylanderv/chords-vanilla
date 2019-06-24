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

/**
 * Permet d'initialiser le bouton de langage
 * @param langSelector Div dans lequel ajouter le bouton de langage
 */
export function initLangButton(langSelector: HTMLDivElement) {
  _langSelector = langSelector;
  _langSelectorButton = document.createElement('button');
  _langSelectorButton.innerHTML = chordLang === "fr" ? "en" : "fr";
  _langSelector.appendChild(_langSelectorButton);
  _langSelectorButton.addEventListener("click", () => setChordLang(chordLang === "fr" ? "en" : "fr") )
}

/**
 * Renvoie le chords en français
 * @param enChord chord en anglais
 */
export function getFrChord(enChord: string): string {
  let frMain = correspondanceEnFr[enChord.charAt(0)];
  return frMain + enChord.substring(1);
}

/**
 * Renvoie le chord en fonction du langage sélectionné
 * @param baseChord chord de base du fichier JSON
 */
export function getChord(baseChord: string): string {
  if (chordLang === "fr") {
    return getFrChord(baseChord);
  } else {
    return baseChord;
  }
}

/**
 * Défini la nouvelle langue à utilsier
 * @param newLang nouvelle langue
 */
function setChordLang(newLang: "fr"|"en") {
  chordLang = newLang;
  _langSelectorButton.innerHTML = chordLang === "fr" ? "en" : "fr";
}