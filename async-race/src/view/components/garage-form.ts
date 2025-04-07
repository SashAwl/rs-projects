import { Component } from './base-component';
import { FormLine } from './form-line';

export class GarageForm extends Component {
  private createForm: Component;
  private updateForm: Component;
  private readonly raceButton: Component;
  private readonly resetButton: Component;
  private readonly generateCarsButton: Component;

  constructor() {
    super({
      tag: 'div',
      classes: ['form'],
    });

    this.createForm = new FormLine({ buttonText: 'Create' });
    this.updateForm = new FormLine({ buttonText: 'Update' });

    const formButtonLine = new Component({
      tag: 'div',
      classes: ['form__line'],
    });

    this.raceButton = new Component({
      tag: 'button',
      classes: ['button', 'button-race'],
      text: 'Race',
    });

    this.resetButton = new Component({
      tag: 'button',
      classes: ['button', 'button-reset'],
      text: 'Reset',
    });

    this.generateCarsButton = new Component({
      tag: 'button',
      classes: ['button', 'button-generate'],
      text: 'Generate cars',
    });

    formButtonLine
      .getNode()
      .append(
        this.raceButton.getNode(),
        this.resetButton.getNode(),
        this.generateCarsButton.getNode(),
      );

    this.appendChildren([this.createForm, this.updateForm, formButtonLine]);
  }
}
