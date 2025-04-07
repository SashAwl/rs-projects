import './view/styles/style.scss';
import { Header } from './view/components/header';
import { Footer } from './view/components/footer';
import { Garage } from './view/components/garage';
import { Component } from './view/components/base-component';

const header = new Header();
document.body.append(header.getNode());

const appContainer = new Component({
  tag: 'div',
  classes: ['container'],
  id: 'app',
});
document.body.append(appContainer.getNode());

const garage = new Garage();
appContainer.getNode().append(garage.getNode());

const footer = new Footer();
document.body.append(footer.getNode());
