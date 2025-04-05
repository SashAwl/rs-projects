import { Component } from './base-component.js';
import type { Options } from './base-component.js';

interface InputOptions extends Options {
  type?: string;
  placeholder?: string;
  value?: string;
  classes: string[];
  max?: string;
  min?: string;
}

export class ComponentInput extends Component {
  constructor({
    type = 'text',
    placeholder = '',
    value = '',
    classes = [],
    max = '',
    min = '',
  }: InputOptions) {
    super({
      tag: 'input',
      classes,
    });

    const node = this.getNode();

    if (node instanceof HTMLInputElement) {
      node.setAttribute('type', type);
      node.setAttribute('placeholder', placeholder);
      node.setAttribute('value', value);
      node.setAttribute('max', max);
      node.setAttribute('min', min);
    }
  }

  public getValue(): string {
    const inputNode = this.getInputNode();
    return inputNode ? inputNode.value : '';
  }

  public setValue(value: string): void {
    const inputNode = this.getInputNode();
    if (inputNode) {
      inputNode.value = value;
    }
  }
}
