import { getChord } from "../../helpers/chordEnFr";
import { IGuitarChord } from "../../model/IGuitarChord";
import { initChordsDbRender, renderChordsDbButton } from "../chordsDbSvgHandler";

let _chord: IGuitarChord = null;
let _element: HTMLElement = null;
let _renderDiv: HTMLElement = null;
let _currentPosition: number = 0;

/**
 * Initialise et render le chord
 * @param element Élément dans lequel afficher le chord
 * @param chord chord à afficher
 */
export function initGuitarRender(element: HTMLElement, chord: IGuitarChord) {
  _chord = chord;
  _element = element;
  _currentPosition = 0;
  _renderDiv = initChordsDbRender(_element, _chord, nextPageHandler, prevPageHandler);
  guitarRender(_currentPosition);
}

/**
 * Permet d'afficher le chord
 * @param currentPosition position du chord à afficher
 */
function guitarRender(currentPosition: number) {
  if (currentPosition >= _chord.positions.length) return;
  let chordPosition = _chord.positions[currentPosition];
  let frets = "";
  chordPosition.frets.forEach(fret => frets += (fret === -1 ? 'x' : fret));
  let fingers = chordPosition.fingers.join('');
  let position = chordPosition.baseFret;
  console.log(frets);
  _renderDiv.innerHTML = '<p></p>base fret : ' + chordPosition.baseFret + '</p> <tab-chord value="' + frets + '" name="' + getChord(_chord.key) + _chord.suffix +'"></tab-chord>'
  renderChordsDbButton(currentPosition, _chord);
}

/**
 * Gère le click sur le bouton `next`
 */
function nextPageHandler() {
  _currentPosition += 1;
  guitarRender(_currentPosition);
}


/**
 * Gère le click sur le bouton `prev`
 */
function prevPageHandler() {
  _currentPosition -= 1;
  guitarRender(_currentPosition);
}