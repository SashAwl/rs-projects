interface OptionInput {
  type: string;
  placeholder?: string;
  name?: string;
  parent: HTMLElement;
  classes?: string[];
}

export function createInputElement(options: OptionInput): HTMLInputElement {
  const { type = '', placeholder = '', parent, classes = [] } = options;

  const element = document.createElement('input');
  element.setAttribute('type', type);
  element.setAttribute('placeholder', placeholder);

  if (classes.length > 0) {
    element.classList.add(...classes);
  }

  if (parent != null) {
    parent.appendChild(element);
  }

  return element;
}
