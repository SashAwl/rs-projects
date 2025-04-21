interface OptionTextarea {
  rows: string;
  cols?: string;
  name: string;
  placeholder?: string;
  parent: HTMLElement;
  classes?: string[];
}

export function createTextareaElement(options: OptionTextarea): HTMLElement {
  const {
    rows = '',
    cols = '',
    placeholder = '',
    name = '',
    parent,
    classes = [],
  } = options;

  const element = document.createElement('textarea');
  element.setAttribute('rows', rows);
  element.setAttribute('cols', cols);
  element.setAttribute('name', name);
  element.setAttribute('placeholder', placeholder);

  if (classes.length > 0) {
    element.classList.add(...classes);
  }

  if (parent != null) {
    parent.appendChild(element);
  }

  return element;
}
