import { strict } from 'assert';

export interface Options {
  tag?: string;
  classes: string[];
  id?: string;
  text?: string;
}

export class Component {
  private readonly children: Component[] = [];
  private readonly node: HTMLElement;

  constructor(
    { tag = 'div', classes = [], id = '', text = '' }: Options,
    ...children: Component[]
  ) {
    const node = document.createElement(tag);
    this.addClasses(classes);
    node.id = id;
    node.textContent = text;
    this.node = node;

    if (children.length > 0) {
      this.appendChildren(children);
    }
  }

  public appendChildren(children: Component[]): void {
    children.forEach((element) => {
      this.append(element);
    });
  }

  public getChildren(): Component[] {
    return this.children;
  }

  public setTextContent(content: string): void {
    this.node.textContent = content;
  }

  public setAttribute(attribute: string, value: string): void {
    this.node.setAttribute(attribute, value);
  }

  public removeAttribute(attribute: string): void {
    this.node.removeAttribute(attribute);
  }

  public toggleClass(className: string): void {
    this.node.classList.toggle(className);
  }

  public addListener(
    eventType: string,
    listener: () => void,
    options = false,
  ): void {
    this.node.addEventListener(eventType, listener, options);
  }

  public removeListener(
    event: string,
    listener: () => void,
    options = false,
  ): void {
    this.node.removeEventListener(event, listener, options);
  }

  public destroyChildren(): void {
    this.children.forEach((child) => {
      child.destroy();
    });

    this.children.length = 0;
  }

  public getNode(): HTMLElement {
    return this.node;
  }

  public getInputNode(): HTMLInputElement | null {
    return this.node instanceof HTMLInputElement ? this.node : null;
  }

  public destroy(): void {
    this.node.remove();
  }

  private append(child: Component): void {
    this.children.push(child);
    this.node.append(child.getNode());
  }

  private addClasses(classList: string[]): void {
    classList.forEach((className: string) => {
      this.node.classList.add(className);
    });
  }
}
