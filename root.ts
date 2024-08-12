import { Index } from './Index';

const createRootElement = (id: string) =>
  document.querySelector(`#${id}`) ??
  document.body.appendChild(document.createElement('div'));

export const createRoot = () => createRootElement('root').appendChild(Index);
