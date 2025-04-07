import { Component } from './base-component';
import { ComponentInput } from './base-component-input';
import { GarageForm } from './garage-form';

export class Garage extends Component {
  private readonly form: Component;

  constructor() {
    super({
      tag: 'div',
      classes: ['garage'],
    });

    this.form = new GarageForm();

    this.appendChildren([this.form]);
  }
}
