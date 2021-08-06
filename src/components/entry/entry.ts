import { createElement } from '../../utils/createElement';
import styles from './entry.module.css';
import { Text, Entry } from '../../types';

function createSection(meaning: Text) {
  return createElement('section', {
    className: styles.list__section,
    childElements: [
      createElement('div', {
        className: styles.section__definition,
        childElements: [
          createElement('p', {
            className: styles.definition__heading,
            innerText: 'Definiton:',
          }),
          createElement('p', {
            className: styles.definition__text,
            innerText: meaning.text.definition,
          }),
        ],
      }),
      createElement('div', {
        className: styles.section__example,
        childElements: [
          createElement('div', {
            className: styles.type__flex,
            childElements: [
              createElement('p', {
                className: styles.example__heading,
                innerText: 'Example',
              }),
              createElement('p', {
                className: styles.section__type,
                innerText: meaning.type,
              }),
            ],
          }),
          createElement('p', {
            className: styles.example__text,
            innerText: meaning.text.example
              ? meaning.text.example
              : 'There is no example',
          }),
        ],
      }),
    ],
  });
}

export function createEntry(def: Entry): HTMLElement {
  return createElement('article', {
    className: styles.wrapper,
    childElements: [
      createElement('div', {
        className: styles.entry__header,
        childElements: [
          createElement('h2', {
            className: styles.header__heading,
            innerText: def.word,
          }),
          createElement('p', {
            innerText: def.phonetics,
          }),
        ],
      }),
      createElement('div', {
        className: styles.entry__list,
        childElements: def.meanings.map((meaning) => createSection(meaning)),
      }),
    ],
  });
}
