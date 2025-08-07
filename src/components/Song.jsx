
import { useState } from 'react';

const songs = [
  { title: 'Bohemian Rhapsody', artist: 'Queen' },
  { title: 'Imagine', artist: 'John Lennon' },
  { title: 'Billie Jean', artist: 'Michael Jackson' },
  { title: 'Hey Jude', artist: 'The Beatles' },
];

const Song = () => {
  const [showSongs, setShowSongs] = useState(false);

  return (
    <div>
      <button onClick={() => setShowSongs((prev) => !prev)}>
        {showSongs ? 'Hide Songs' : 'Show Songs'}
      </button>
      <ul style={{ display: showSongs ? 'block' : 'none', padding: 0, listStyle: 'none' }}>
        {songs.map((song, idx) => (
          <li key={idx} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <strong>{song.title}</strong> by {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Song;
