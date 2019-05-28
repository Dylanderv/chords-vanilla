export function addElementToSelector(divElement: HTMLDivElement, value: string, className: string, uniqueId: string, clickHandler: Function, functionParameter: any) {
  let elementToAdd: HTMLSpanElement = document.createElement('button');
  elementToAdd.innerHTML = value;
  elementToAdd.classList.add(className);
  elementToAdd.id = uniqueId;
  elementToAdd.addEventListener('click', () => clickHandler(functionParameter))
  divElement.append(elementToAdd);
}

export function addSeparator(divElement: HTMLDivElement) {
  let elementToAdd: HTMLSpanElement = document.createElement('span');
  elementToAdd.innerHTML = " - ";
  elementToAdd.classList.add("separator");
  divElement.append(elementToAdd);
}

export function resetSelector(divElement: HTMLDivElement, filterClass: string) {
  if (typeof filterClass === 'string') {
    let oldElements = divElement.getElementsByClassName(filterClass);
    Array.from(oldElements).forEach((oldElement) => divElement.removeChild(oldElement));
  } else {
    while (divElement.firstChild) {
      divElement.removeChild(divElement.firstChild);
    }
  }
}

export function removeClassForAllIn(element: HTMLElement, classToRemove: string) {
  Array.from(element.getElementsByClassName(classToRemove))
    .forEach((selectedElement) => selectedElement.classList.remove(classToRemove));
}

export function addClassToElement(element: HTMLElement, classToAdd: string) {
  element.classList.add(classToAdd)
}