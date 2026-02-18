
function PlayerName({ name, onNameChange }) {
  return (
    <div className="form-outline">
      <input
        id="player-name"
        type="text"
        className="form-control"
        placeholder="John"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
      <label htmlFor="player-name" className="form-label">
        Name
      </label>
    </div>
  );
}

export default PlayerName;
