type PropertyValue =
  | boolean
  | number
  | string
  | ((event: HTMLElementEventMap[keyof HTMLElementEventMap]) => unknown);

declare namespace JSX {
  type IntrinsicElements = Record<
    keyof HTMLElementTagNameMap,
    Record<string, unknown>
  >;

  type Fragment = 'jsxFragment';
  type Properties = Record<string, PropertyValue>;
  type Element = Node & ((properties: Properties) => unknown);
}
