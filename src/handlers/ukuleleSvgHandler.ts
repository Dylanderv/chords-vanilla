import { IUkuleleChord } from "../model/IUkuleleChord";
import { getChord } from "../helpers/chordEnFr";

let _chord: IUkuleleChord = null;
let _element: HTMLElement = null;
let _renderDiv: HTMLElement = null;
let _pagesDiv: HTMLElement = null;
let _currentPosition: number = 0;

export function initUkuleleRender(element: HTMLElement, chord: IUkuleleChord) {
  _chord = chord;
  _element = element;
  _currentPosition = 0;
  while(_element.firstChild) _element.removeChild(_element.firstChild);
  _renderDiv = document.createElement('div');
  _renderDiv.id = "renderUkulele";
  _pagesDiv = document.createElement('div');
  _pagesDiv.id = "pagesUkulele"
  _element.appendChild(_renderDiv);
  _element.appendChild(_pagesDiv);
  let elementsToAdd: string = '';
  elementsToAdd += '<mwc-button raised id="prev">Previous</mwc-button>'
  elementsToAdd += '<span id="pagesNumber"></span>'
  elementsToAdd += '<mwc-button raised id="next">Next</mwc-button>'
  _pagesDiv.innerHTML = elementsToAdd;
  let buttonPrev: HTMLElement = document.getElementById('prev');
  let buttonNext: HTMLElement = document.getElementById('next');
  if (buttonNext !== null) buttonNext.addEventListener('click', nextPageHandler)
  if (buttonPrev !== null) buttonPrev.addEventListener('click', prevPageHandler)
  ukuleleRender(_currentPosition);
}

function ukuleleRender(currentPosition: number) {
  if (currentPosition >= _chord.positions.length) return;
  let chordPosition = _chord.positions[currentPosition];
  let frets = chordPosition.frets.join('');
  let fingers = chordPosition.fingers.join('');
  let position = chordPosition.baseFret;
  _renderDiv.innerHTML = '<uke-chord frets="' + frets + '" fingers="' + fingers + '" position="' + position + '" name="' + getChord(_chord.key) + _chord.suffix +'"></uke-chord>'
  renderButton(currentPosition);
}

function renderButton(currentPosition: number) {
  let buttonPrev: HTMLElement = document.getElementById('prev');
  let buttonNext: HTMLElement = document.getElementById('next');
  let elementsToAdd: string = '';
  if (currentPosition === 0) {
    buttonPrev.setAttribute("disabled", '');
    buttonNext.removeAttribute('disabled');
  } else if (currentPosition === _chord.positions.length - 1) {
    buttonNext.setAttribute("disabled", '');
    buttonPrev.removeAttribute('disabled');
  } else {
    buttonNext.removeAttribute('disabled');
    buttonPrev.removeAttribute('disabled');
  }
  document.getElementById('pagesNumber').innerHTML = (currentPosition + 1 as unknown as string) + "/" + _chord.positions.length

  
  // _pagesDiv.innerHTML = elementsToAdd;

  
  
}

function nextPageHandler() {
  _currentPosition += 1;
  ukuleleRender(_currentPosition);
}

function prevPageHandler() {
  _currentPosition -= 1;
  ukuleleRender(_currentPosition);
}
