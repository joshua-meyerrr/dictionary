import { createEntry } from './components/entry/entry';
import styles from './style.module.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const definition = {
  word: 'code',
  phonetics: '/koʊd/',
  sound: 'play',
  meanings: [
    {
      type: 'verb',
      definitions: [
        {
          definition:
            'Convert (the words of a message) into a particular code in order to convey a secret meaning.',
          example:
            'only Mitch knew how to read the message—even the name was coded',
        },
        {
          definition: 'Write code for (a computer program)',
          example: 'most developers code C + + like C',
        },
      ],
    },
    {
      type: 'noun',
      definitions: [
        {
          definition:
            'A system of words, letters, figures, or other symbols substituted for other words, letters, etc., especially for the purposes of secrecy.',
          example:
            'only Mitch knew how to read the message—even the name was coded',
        },
        {
          definition: 'Write code for (a computer program)',
          example: 'most developers code C + + like C',
        },
      ],
    },
  ],
};

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
      childElements: [createEntry(), createEntry()],
    }),
  ],
});

if (app !== null) {
  app.append(mainEl);
}
