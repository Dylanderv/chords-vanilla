import { IUkuleleChord } from "../../model/IUkuleleChord";
import { getChord } from "../../helpers/chordEnFr";
import { initChordsDbRender, renderChordsDbButton } from "../chordsDbSvgHandler";

let _chord: IUkuleleChord = null;
let _element: HTMLElement = null;
let _renderDiv: HTMLElement = null;
let _currentPosition: number = 0;

/**
 * Initialise et render le chord
 * @param element Élément dans lequel afficher le chord
 * @param chord chord à afficher
 */
export function initUkuleleRender(element: HTMLElement, chord: IUkuleleChord) {
  _chord = chord;
  _element = element;
  _currentPosition = 0;
  _renderDiv = initChordsDbRender(_element, _chord, nextPageHandler, prevPageHandler);
  ukuleleRender(_currentPosition);
}

/**
 * Permet d'afficher le chord
 * @param currentPosition position du chord à afficher
 */
function ukuleleRender(currentPosition: number) {
  if (currentPosition >= _chord.positions.length) return;
  let chordPosition = _chord.positions[currentPosition];
  let frets = chordPosition.frets.join('');
  let fingers = chordPosition.fingers.join('');
  let position = chordPosition.baseFret;
  _renderDiv.innerHTML = '<uke-chord frets="' + frets + '" fingers="' + fingers + '" position="' + position + '" name="' + getChord(_chord.key) + _chord.suffix +'"></uke-chord>'
  renderChordsDbButton(currentPosition, _chord);
}

/**
 * Gère le click sur le bouton `next`
 */
function nextPageHandler() {
  _currentPosition += 1;
  ukuleleRender(_currentPosition);
}

/**
 * Gère le click sur le bouton `prev`
 */
function prevPageHandler() {
  _currentPosition -= 1;
  ukuleleRender(_currentPosition);
}
