import { IUkulelePosition } from "../model/IUkulelePosition";
import { IUkuleleChord } from "../model/IUkuleleChord";

let _chord: IUkuleleChord = null;
let _element: HTMLElement = null;

export function initUkuleleRender(element: HTMLElement, chord: IUkuleleChord) {
  _chord = chord;
  _element = element;
  ukuleleRender(0);
}

function ukuleleRender(currentPosition: number) {
  if (currentPosition >= _chord.positions.length) return;
  let chordPosition = _chord.positions[currentPosition];
  let frets = chordPosition.frets.join('');
  let fingers = chordPosition.fingers.join('');
  let position = chordPosition.baseFret;
  _element.innerHTML = '<uke-chord frets="' + frets + '" fingers="' + fingers + '" position="' + position + '"></uke-chord>'
  renderButton(currentPosition);
}

function renderButton(currentPosition: number) {
  let buttonNext: HTMLButtonElement;
  let buttonPrev: HTMLButtonElement;

  if (currentPosition !== 0) {
    buttonPrev = document.createElement('button');
    buttonPrev.innerHTML = 'Previous';
    buttonPrev.addEventListener('click', () => ukuleleRender(currentPosition - 1))
    _element.appendChild(buttonPrev)
  }

  if (currentPosition < _chord.positions.length - 1) {
    buttonNext = document.createElement('button');
    buttonNext.innerHTML = 'Next';
    buttonNext.addEventListener('click', () => ukuleleRender(currentPosition + 1))
    _element.appendChild(buttonNext)
  }
}
