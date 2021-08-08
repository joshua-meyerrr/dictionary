import { createEntry } from './components/entry/entry';
import styles from './style.module.css';
import { Entry } from './types';
import { createElement } from './utils/createElement';
import { getEntry } from './utils/api';

const app = document.querySelector<HTMLDivElement>('#app');

const defaultEntry: Entry = {
  word: 'doublethink',
  phonetics: 'ˈdə-bəl-ˌthiŋk',
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

const entryList = createElement('div', {
  className: styles.results,
  childElements: [createEntry(defaultEntry)],
});

const inputBar = createElement('input', {
  placeholder: 'look up a word...',
  className: styles.search__bar,
});

inputBar.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    inputButton.click();
  }
});

const inputButton = createElement('button', {
  className: styles.search__button,
  innerText: 'search',
  onclick: async () => {
    entryList.innerHTML = '';
    const newWord = await getEntry(inputBar.value);
    entryList.append(createEntry(newWord[0]));
  },
});

const mainEl = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: 'Vocabulous',
      className: styles.heading,
    }),
    createElement('div', {
      className: styles.search,
      childElements: [inputBar, inputButton],
    }),
    entryList,
  ],
});

if (app !== null) {
  app.append(mainEl);
}
