export const Main = ({ text }: { text: string }) => {
  return (
    <>
      <section>
        <article>{text}</article>
      </section>
      <section>
        <button onClick={() => alert(text)}>Click</button>
      </section>
    </>
  );
};
