import { Component } from './base-component';
import { FormLine } from './form-line';

export class GarageForm extends Component {
  private createForm: Component;
  private updateForm: Component;

  constructor() {
    super({
      tag: 'div',
      classes: ['form'],
    });

    this.createForm = new FormLine({ buttonText: 'Create' });
    this.updateForm = new FormLine({ buttonText: 'Update' });
    this.appendChildren([this.createForm, this.updateForm]);
  }
}
