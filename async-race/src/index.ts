import './view/styles/style.scss';
import { Header } from './view/components/header';
import { Footer } from './view/components/footer';
import { GaragePage } from './view/components/garage-page';
import { Component } from './view/components/base-component';
import { getCars } from './api/api';

const header = new Header();
document.body.append(header.getNode());

const appContainer = new Component({
  tag: 'div',
  classes: ['container'],
  id: 'app',
});
document.body.append(appContainer.getNode());

getCars([
  { key: '_page', value: '1' },
  { key: '_limit', value: '7' },
]).then((data) => {
  console.log('Result', data);
  const garage = new GaragePage(data);
  appContainer.getNode().append(garage.getNode());
});

const footer = new Footer();
document.body.append(footer.getNode());
