interface OptionAnchor {
  text?: string;
  href: string;
  src?: string;
  target?: string;
  parent: HTMLElement;
  classes?: string[];
}

export function createAnchorElement(options: OptionAnchor): HTMLElement {
  const { text = '', href = '', target = '', parent, classes = [] } = options;

  const element = document.createElement('a');
  element.textContent = text;
  element.setAttribute('href', href);
  element.setAttribute('target', target);

  if (classes.length > 0) {
    element.classList.add(...classes);
  }

  if (parent != null) {
    parent.appendChild(element);
  }

  return element;
}
