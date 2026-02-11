
function GuessInput() {
  return (
    <form className="form-container">
      <div className="form-row">
        <div className="form-outline game__guess-field">
          <input
            id="guess-input"
            type="number"
            className="form-control"
            placeholder="5"
          />
          <label htmlFor="guess-input" className="form-label">
            Enter your guess
          </label>
        </div>
      </div>

      <button className="btn btn-primary game__guess-btn">Guess</button>
    </form>
  );
}

export default GuessInput;
