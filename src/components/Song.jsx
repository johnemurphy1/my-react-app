const Song = ({ title, artist }) => {
  return (
    <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
      <strong>{title}</strong> by {artist}
    </div>
  );
};

export default Song;
