export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  props: Partial<HTMLElementTagNameMap[K]> & {
    childElements?: HTMLElement[];
  }
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName);
  const { childElements, ...other } = props;
  Object.assign(element, other);
  if (childElements) {
    element.append(...childElements);
  }
  return element;
}
