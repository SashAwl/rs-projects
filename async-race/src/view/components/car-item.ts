import { Component } from './base-component';
import { CarIcon } from './car-icon';
import { Car } from '../../types';

export class CarItem extends Component {
  private readonly carName: Component;
  private readonly selectButton: Component;
  private readonly removeButton: Component;
  private readonly startButton: Component;
  private readonly stopButton: Component;
  private readonly carIcon: Component;

  constructor(carData: Car) {
    super({
      tag: 'div',
      classes: ['car-item'],
    });

    const buttonsLine = new Component({
      tag: 'div',
      classes: ['buttons-line'],
    });

    this.selectButton = new Component({
      tag: 'button',
      classes: ['button', 'button-select'],
      text: 'select',
    });

    this.removeButton = new Component({
      tag: 'button',
      classes: ['button', 'button-remove'],
      text: 'remove',
    });

    this.carName = new Component({
      tag: 'h3',
      classes: ['car-item__name'],
      text: carData.name,
    });

    buttonsLine
      .getNode()
      .append(
        this.selectButton.getNode(),
        this.removeButton.getNode(),
        this.carName.getNode(),
      );

    const buttonsLine2 = new Component({
      tag: 'div',
      classes: ['buttons-line'],
    });

    this.startButton = new Component({
      tag: 'button',
      classes: ['button', 'button-start'],
      text: 'start',
    });

    this.stopButton = new Component({
      tag: 'button',
      classes: ['button', 'button-stop'],
      text: 'stop',
    });

    buttonsLine2
      .getNode()
      .append(this.startButton.getNode(), this.stopButton.getNode());

    this.carIcon = new CarIcon(carData.color);

    this.appendChildren([buttonsLine, buttonsLine2, this.carIcon]);
  }
}
