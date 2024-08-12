const jsxFragment = (...children: (string | HTMLElement)[]) => {
  console.log('fragment', { children });
  const fragment = new DocumentFragment();
  for (const child of children) {
    if (typeof child === 'string') {
      fragment.appendChild(document.createTextNode(child));
    } else {
      fragment.appendChild(child);
    }
  }
  return fragment;
};

const isEventListenerName = (
  key: string,
  name: string,
): name is keyof HTMLElementEventMap => {
  return key.startsWith('on') && key.length > 2;
};

export const jsx = Object.assign(
  (
    name: keyof HTMLElementTagNameMap | JSX.Fragment | JSX.Element,
    properties: JSX.Properties = {},
    ...children: (string | HTMLElement)[]
  ) => {
    console.log('jsx', { name, properties, children });
    if (typeof name === 'function') {
      return name(properties);
    }
    if (name === jsx.Fragment) {
      return jsxFragment(...children);
    }
    const element = document.createElement(name);
    for (const key in properties ?? {}) {
      const value = properties[key];
      const name = key.slice(2).toLowerCase();
      if (isEventListenerName(key, name) && typeof value === 'function') {
        element.addEventListener(name, value);
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(element.style, value);
      } else {
        element.setAttribute(key, `${value}`);
      }
    }
    for (const child of children) {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    }
    return element;
  },
  { Fragment: 'jsxFragment' },
);
