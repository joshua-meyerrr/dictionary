import styles from './style.module.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainEl = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: '<cool name here>',
      className: styles.heading,
    }),
    createElement('input', {
      placeholder: 'look up a word...',
      className: styles.search,
    }),
    createElement('div', {
      className: styles.results,
    }),
  ],
});

if (app !== null) {
  app.append(mainEl);
}
