import { Interface } from 'readline';
import { Component } from './base-component';
import { ComponentInput } from './base-component-input';

interface FormLineParams {
  buttonText: string;
  handler?: () => void;
}

export class FormLine extends Component {
  private nameAuto: Component;
  private colorAuto: Component;
  private confirmButton: Component;

  constructor(params: FormLineParams) {
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
      classes: ['button-confirm'],
      text: params.buttonText,
    });

    this.appendChildren([this.nameAuto, this.colorAuto, this.confirmButton]);
  }
}
