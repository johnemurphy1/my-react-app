import Song from './Song';

const MainContent = () => {
  return (
    <main style={{ padding: '20px' }}>
      <h2>Top Songs</h2>
      <Song title="Bohemian Rhapsody" artist="Queen" />
      <Song title="Imagine" artist="John Lennon" />
      <Song title="Billie Jean" artist="Michael Jackson" />
      <Song title="Hey Jude" artist="The Beatles" />
    </main>
  );
};

export default MainContent;
