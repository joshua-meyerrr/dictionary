import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainEl = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: '<cool name here>',
      className: 'heading',
    }),
  ],
});

if (app !== null) {
  app.append(mainEl);
}
