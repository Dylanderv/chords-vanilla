
/**
 * Permet d'ajouter un bouton à un élément
 * @param divElement Selecteur dans lequel ajouter le nouvel élément
 * @param value Valeur du bouton à ajouter
 * @param className classe du bouton à ajouter
 * @param uniqueId id du bouton à ajouter
 * @param clickHandler fonction à exécuter lors du click
 * @param functionParameter paramètres pour la fonction `clickHandler`
 */
export function addElementToSelector(divElement: HTMLDivElement, value: string, className: string, uniqueId: string, clickHandler: Function, functionParameter: any) {
  // Permet d'ajouter un élément à un selecteur
  // L'élément ajouté est un bouton
  let elementToAdd: HTMLSpanElement = document.createElement('button');
  // Ayant pour text `value`
  elementToAdd.innerHTML = value;
  elementToAdd.classList.add(className);
  elementToAdd.classList.add("ripple");
  // Ayant pour id `uniqueId`
  elementToAdd.id = uniqueId;
  // Ayant pour eventListener `functionParameter`
  elementToAdd.addEventListener('click', () => clickHandler(functionParameter))
  // Est ajouté à `divElement`
  divElement.append(elementToAdd);
}

/**
 * Ajoute un séparateur `span` ayant pour text `-`
 * @param divElement Élément dans lequel ajouter le séparateur
 */
export function addSeparator(divElement: HTMLDivElement) {
  let elementToAdd: HTMLSpanElement = document.createElement('span');
  elementToAdd.innerHTML = " - ";
  elementToAdd.classList.add("separator");
  divElement.append(elementToAdd);
}

/**
 * Permet de supprimer toutes les élément ayant pour classe `filterClass` dans `divElement`
 * Supprime tous les fils si aucune classe n'est spécifiée
 * @param divElement Élément dans lequel supprimer tous les fils ayant `filterClass`
 * @param filterClass Classe à filtrer
 */
export function removeElementWithClass(divElement: HTMLDivElement, filterClass: string) {
  if (typeof filterClass === 'string') {
    let oldElements = divElement.getElementsByClassName(filterClass);
    Array.from(oldElements).forEach((oldElement) => divElement.removeChild(oldElement));
  } else {
    while (divElement.firstChild) {
      divElement.removeChild(divElement.firstChild);
    }
  }
}

/**
 * Supprime toutes les classes `classToRemove` des fils d'`element`
 * @param element Élément dans lequel travailler
 * @param classToRemove Classe à supprimer
 */
export function removeClassForAllIn(element: HTMLElement, classToRemove: string) {
  Array.from(element.getElementsByClassName(classToRemove))
    .forEach((selectedElement) => selectedElement.classList.remove(classToRemove));
}

/**
 * Ajoute une classe à un élément
 * @param element Élément pour lequel ajouter une classe
 * @param classToAdd Classe à ajouter
 */
export function addClassToElement(element: HTMLElement, classToAdd: string) {
  element.classList.add(classToAdd)
}