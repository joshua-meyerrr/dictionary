import { createElement } from '../../utils/createElement';
import styles from './entry.module.css';

export function createEntry() {
  return createElement('article', {
    className: styles.wrapper,
    childElements: [
      createElement('h2', {
        className: styles.entry__heading,
        innerText: 'Code',
      }),
      createElement('p', {
        innerText: '/koʊd/',
      }),

      createElement('div', {
        className: styles.entry__list,
        childElements: [
          createElement('section', {
            className: styles.list__entry,
            childElements: [
              createElement('p', {
                innerText: 'Type: Verb',
              }),
              createElement('div', {
                childElements: [
                  createElement('p', {
                    innerText: 'definiton:',
                  }),
                  createElement('p', {
                    innerText:
                      'Convert (the words of a message) into a particular code in order to convey a secret meaning.',
                  }),
                ],
              }),
              createElement('div', {
                childElements: [
                  createElement('p', {
                    innerText: 'example',
                  }),
                  createElement('p', {
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
