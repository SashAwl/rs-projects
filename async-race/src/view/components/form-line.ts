import { Component } from './base-component';
import { ComponentInput } from './base-component-input';

interface FormLineParameters {
  buttonText: string;
  handler?: () => void;
}

export class FormLine extends Component {
  private nameAuto: Component;
  private colorAuto: Component;
  private confirmButton: Component;

  constructor(parameters: FormLineParameters) {
    super({
      tag: 'div',
      classes: ['form__line'],
    });

    this.nameAuto = new ComponentInput({
      type: 'text',
      placeholder: 'Input car',
      classes: ['form__input'],
    });

    this.colorAuto = new ComponentInput({
      type: 'color',
      classes: ['palette'],
    });

    this.confirmButton = new Component({
      tag: 'button',
      classes: ['button', 'button-confirm'],
      text: parameters.buttonText,
    });

    this.appendChildren([this.nameAuto, this.colorAuto, this.confirmButton]);
  }
}
