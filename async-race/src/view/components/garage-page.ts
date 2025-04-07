import { Component } from './base-component';
import { GarageForm } from './garage-form';
import { Garage } from './garage';
import type { carOptions } from '../../types';

export class GaragePage extends Component {
  private readonly form: Component;
  private readonly garage: Component;
  private readonly garageButton: Component;
  private readonly winnerButton: Component;

  constructor(dataCar: carOptions) {
    super({
      tag: 'div',
      classes: ['garage-page'],
    });

    const menu = new Component({
      tag: 'div',
      classes: ['menu'],
    });

    this.garageButton = new Component({
      tag: 'button',
      classes: ['button', 'button-menu'],
      text: 'Garage',
    });

    this.winnerButton = new Component({
      tag: 'button',
      classes: ['button', 'button-menu'],
      text: 'Winners',
    });

    menu
      .getNode()
      .append(this.garageButton.getNode(), this.winnerButton.getNode());

    this.form = new GarageForm();
    this.garage = new Garage(dataCar);

    this.appendChildren([menu, this.form, this.garage]);
  }
}
