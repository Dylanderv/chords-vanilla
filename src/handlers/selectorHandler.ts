import { removeElementWithClass, addElementToSelector, addSeparator, removeClassForAllIn, addClassToElement } from "../helpers/selectorHelper";
import { getChord } from "../helpers/chordEnFr";
import { initPiano } from "./piano/pianoHandler";
import { initUkulele } from "./ukulele/ukuleleHandler";
import { initGuitar } from "./guitar/guitarHandler";

let _instrumentSelector: HTMLDivElement = null;
let _chordShow: HTMLDivElement = null;
let _chordSelector: HTMLDivElement = null;
let _chordTypeSelector: HTMLDivElement = null;

/**
 * Initialise les div nécessaires à l'affichage
 * Doit être appelé en premier
 * @param instrumentSelector div pour le selecteur d'instrument
 * @param chordTypeSelector div pour le selecteur des chordType
 * @param chordSelector div pour le selecteur des chord
 * @param chordShow div pour l'affichage du chord
 */
export function init(instrumentSelector: HTMLDivElement, chordTypeSelector: HTMLDivElement, chordSelector: HTMLDivElement, chordShow: HTMLDivElement) {
  // Initialisation des variables
  _instrumentSelector = instrumentSelector;
  _chordTypeSelector = chordTypeSelector;
  _chordSelector = chordSelector;
  _chordShow = chordShow;
}

/**
 * Initialise la liste des instruments et ajoute les eventListener correspondant
 */
export function initInstrumentSelector() {
  addElementToSelector(_instrumentSelector, 'Piano', "instrument", "Piano", initPiano, null);
  addElementToSelector(_instrumentSelector, 'Ukulele', "instrument", "Ukulele", initUkulele, null);
  addElementToSelector(_instrumentSelector, 'Guitar', "instrument", "Guitar", initGuitar, null);
}

/**
 * Permet de gérer le click sur un bouton d'instrument
 * @param instrument Spécifie l'instrument actuel (nécessaire pour la coloration)
 * @param chordTypeInit Liste des chordType à ajouter
 * @param onClickHandler Fonction à exécuter lors d'un click
 */
export function handleInstrumentClick(instrument : "Piano" | "Ukulele" | "Guitar", chordTypeInit: {name: string, parameter: any}[], onClickHandler: Function) {
  // Mise à jour de la couleur du selectionné
  removeClassForAllIn(_instrumentSelector, "selected");
  addClassToElement(document.getElementById(instrument), 'selected');
  // Réinitialisation de la liste (suppression des séparateurs et des chordType)
  removeElementWithClass(_chordTypeSelector, "separator");
  removeElementWithClass(_chordTypeSelector, 'chordType');
  // Ajout des infos dans la liste
  for (let index = 0; index < chordTypeInit.length; index++) {
    const chordName = chordTypeInit[index];
    addElementToSelector(_chordTypeSelector, getChord(chordName.name), "chordType", "type" + chordName.name, onClickHandler, chordName.parameter);
    // Ajout du séparateur
    if (index !== chordTypeInit.length - 1) addSeparator(_chordTypeSelector);
  }
}

/**
 * Permet de gérer le click sur un bouton ChordType
 * @param newTypeSelected Spécifie le type selectionné (nécessaire pour la coloration)
 * @param chordsInit Liste des chords à ajouter
 * @param onClickHandler Fonction à exécuter lors d'un click
 */
export function handleChordTypeClick(newTypeSelected: string, chordsInit: {name: string, parameter: any}[], onClickHandler: Function) {
  // Mise à jour de la couleur du selectionné
  removeClassForAllIn(_chordTypeSelector, "selected");
  addClassToElement(document.getElementById(newTypeSelected), 'selected');
  // Réinitialisation de la liste (suppression des séparateurs et des chords)
  removeElementWithClass(_chordSelector, 'chord');
  removeElementWithClass(_chordSelector, "separator");
  // Ajout des infos dans la liste
  for (let index = 0; index < chordsInit.length; index++) {
    const chord = chordsInit[index];
    addElementToSelector(_chordSelector, getChord(chord.name), "chord", "chord" + chord.name, onClickHandler, chord.parameter);
    // Ajout du séparateur
    if (index !== chordsInit.length - 1) addSeparator(_chordSelector);
  }
}

/**
 * Permet de gérer le click sur un bouton Chord
 * @param newChordSelected Spécifie le chord selectionné (nécessaire pour la coloration)
 * @param renderFunction Fonction à exécuter gérant l'affichage du chord
 * @param parameter Paramètre(s) utile(s) pour la fonction `renderFunction`
 */
export function handleChordClick(newChordSelected: string, renderFunction: Function, parameter: any[]) {
  // Mise à jour de la couleur du selectionné
  removeClassForAllIn(_chordSelector, "selected");
  addClassToElement(document.getElementById(newChordSelected), 'selected');
  // execution de la fonction gérant l'affichage de l'accord
  renderFunction(_chordShow, ...parameter);
}
