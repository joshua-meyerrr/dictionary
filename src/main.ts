import { createEntry } from './components/entry/entry';
import styles from './style.module.css';
import { Entry } from './types';
import { createElement } from './utils/createElement';
import { getEntry } from './utils/api';

const app = document.querySelector<HTMLDivElement>('#app');

const test = await getEntry();
console.log(test);

const defaultEntry: Entry = {
  word: 'doublethink',
  phonetics: '/ˈdə-bəl-ˌthiŋk/',
  meanings: [
    {
      type: 'noun',
      text: {
        definition:
          'The acceptance of contrary opinions or beliefs at the same time, especially as a result of political indoctrination.',
        example:
          'By an amazing exploit of doublethink, he manages to convince himself that theistic explanations are simple explanations.',
      },
    },
  ],
};

const mainEl = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: 'Vocabulous',
      className: styles.heading,
    }),
    createElement('input', {
      placeholder: 'look up a word...',
      className: styles.search,
    }),
    createElement('div', {
      className: styles.results,
      childElements: [createEntry(defaultEntry)],
    }),
  ],
});

if (app !== null) {
  app.append(mainEl);
}
