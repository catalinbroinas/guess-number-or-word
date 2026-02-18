
function AttemptsInput({ attempts, onAttemptsChange }) {
  return (
    <div className="form-outline">
      <input
        id="attempts"
        type="number"
        className="form-control"
        placeholder="3"
        min="1"
        max="10"
        value={attempts}
        onChange={(e) => onAttemptsChange(e.target.value)}
      />
      <label
        htmlFor="attempts"
        className="form-label"
      >Attempts</label>
    </div>
  );
}

export default AttemptsInput;
