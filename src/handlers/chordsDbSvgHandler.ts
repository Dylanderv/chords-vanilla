import { IGuitarChord } from "../model/IGuitarChord";
import { IUkuleleChord } from "../model/IUkuleleChord";

/**
 * Permet d'initialiser le render pour les JSON de `chords-db`
 * @param element Élément dans lequel afficher
 * @param chord chord à afficher
 * @param renderer function gérant l'affichage
 * @param nextPageHandler handler pour le bouton next
 * @param prevPageHandler handler pour le bouton prev
 */
export function initChordsDbRender(element: HTMLElement, chord: IUkuleleChord | IGuitarChord, nextPageHandler: EventListenerOrEventListenerObject, prevPageHandler: EventListenerOrEventListenerObject) {
  // Supprime tous les enfants de `element` pour partir sur un base seine
  while(element.firstChild) element.removeChild(element.firstChild);
  // Défini une div de render ayant pour id `render`
  let _renderDiv = document.createElement('div');
  _renderDiv.id = "render";
  // Défini une div de page ayant pour id `pages`
  let _pagesDiv = document.createElement('div');
  _pagesDiv.id = "pages"
  // Ajoute `render` et `pages` à `element`
  element.appendChild(_renderDiv);
  element.appendChild(_pagesDiv);
  // Créé et ajoute les boutons `next` et `prev` ainsi que le numéro de page
  let elementsToAdd: string = '';
  elementsToAdd += '<mwc-button raised id="prev">Previous</mwc-button>'
  elementsToAdd += '<span id="pagesNumber"></span>'
  elementsToAdd += '<mwc-button raised id="next">Next</mwc-button>'
  _pagesDiv.innerHTML = elementsToAdd;
  let buttonPrev: HTMLElement = document.getElementById('prev');
  let buttonNext: HTMLElement = document.getElementById('next');

  // Ajoute les eventListener sur les bouton `next` et `prev`
  if (buttonNext !== null) buttonNext.addEventListener('click', nextPageHandler)
  if (buttonPrev !== null) buttonPrev.addEventListener('click', prevPageHandler)

  return _renderDiv
}

/**
 * Permet de rendre les boutons next et prev (disable/enable quand nécessaire)
 * @param currentPosition position du chord affiché
 * @param chord chord à afficher
 */
export function renderChordsDbButton(currentPosition: number, chord: IUkuleleChord | IGuitarChord) {
  let buttonPrev: HTMLElement = document.getElementById('prev');
  let buttonNext: HTMLElement = document.getElementById('next');

  if (currentPosition === 0) {

    buttonPrev.setAttribute("disabled", '');
    buttonNext.removeAttribute('disabled');

  } else if (currentPosition === chord.positions.length - 1) {

    buttonNext.setAttribute("disabled", '');
    buttonPrev.removeAttribute('disabled');

  } else {

    buttonNext.removeAttribute('disabled');
    buttonPrev.removeAttribute('disabled');
  }
  document.getElementById('pagesNumber').innerHTML = (currentPosition + 1 as unknown as string) + "/" + chord.positions.length
}
