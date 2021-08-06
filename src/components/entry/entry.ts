import { createElement } from '../../utils/createElement';
import styles from './entry.module.css';

export function createEntry() {
  return createElement('article', {
    className: styles.wrapper,
    childElements: [
      createElement('div', {
        className: styles.entry__header,
        childElements: [
          createElement('h2', {
            className: styles.header__heading,
            innerText: 'Code',
          }),
          createElement('p', {
            innerText: '/koʊd/',
          }),
        ],
      }),
      createElement('div', {
        className: styles.entry__list,
        childElements: [
          createElement('section', {
            className: styles.list__section,
            childElements: [
              createElement('p', {
                className: styles.section__type,
                innerText: 'Verb',
              }),
              createElement('div', {
                className: styles.section__definition,
                childElements: [
                  createElement('p', {
                    className: styles.definition__heading,
                    innerText: 'Definiton:',
                  }),
                  createElement('p', {
                    className: styles.definition__text,
                    innerText:
                      'Convert (the words of a message) into a particular code in order to convey a secret meaning.',
                  }),
                ],
              }),
              createElement('div', {
                className: styles.section__example,
                childElements: [
                  createElement('p', {
                    className: styles.example__heading,
                    innerText: 'Example',
                  }),
                  createElement('p', {
                    className: styles.example__text,
                    innerText:
                      'only Mitch knew how to read the message—even the name was coded',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
