import { Component } from './base-component';
import { CarItem } from './car-item';
import type { carOptions } from '../../types';

export class Garage extends Component {
  private heading: Component;
  private currentPage: Component;

  constructor(carData: carOptions) {
    super({
      tag: 'div',
      classes: ['garage'],
    });

    this.heading = new Component({
      tag: 'h1',
      classes: ['heading'],
      text: `Garage (${carData.carCount})`,
    });

    this.currentPage = new Component({
      tag: 'h3',
      classes: ['current-page'],
      text: `Page #${carData.pageNumber}`,
    });

    const cars = new Component({
      tag: 'div',
      classes: ['cars'],
    });

    carData.carList.forEach((car) => {
      const carBlock = new CarItem(car);
      cars.getNode().append(carBlock.getNode());
    });

    this.appendChildren([this.heading, this.currentPage, cars]);
  }
}
