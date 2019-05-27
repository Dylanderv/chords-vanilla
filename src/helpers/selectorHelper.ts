export function addElementToSelector(divElement: HTMLDivElement, value: string, className: string, clickHandler: Function, functionParameter: any) {
  let elementToAdd: HTMLSpanElement = document.createElement('span');
  elementToAdd.innerHTML = value;
  elementToAdd.classList.add(className)
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
