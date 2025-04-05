import { Component } from './base-component';

export class Header extends Component {
  constructor() {
    super({
      tag: 'header',
      classes: ['header'],
      text: 'Async race',
    });
  }
}
