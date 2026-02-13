import { useState } from "react";

function GuessInput({ onGuess }) {
  const [localNumber, setLocalNumber] = useState(null);

  return (
    <form className="form-container" onSubmit={(e) => {
      e.preventDefault();
      onGuess(localNumber);
    }}>
      <div className="form-row">
        <div className="form-outline game__guess-field">
          <input
            id="guess-input"
            type="number"
            className="form-control"
            placeholder="5"
            onChange={(e) => setLocalNumber(Number(e.target.value))}
          />
          <label htmlFor="guess-input" className="form-label">
            Enter your guess
          </label>
        </div>
      </div>

      <button 
        className="btn btn-primary game__guess-btn"
        disabled={!localNumber}
      >Guess</button>
    </form>
  );
}

export default GuessInput;
