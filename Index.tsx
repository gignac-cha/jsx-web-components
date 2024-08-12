import { Main } from './Main';

export const Index = () => {
  return (
    <>
      <header>
        <h1>Title</h1>
      </header>
      <nav>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" />
      </nav>
      <main>
        <Main text="Hello, World!"></Main>
      </main>
      <footer></footer>
    </>
  );
};
