import { useState } from "react";
import GameSettings from "./GameSettings";
import GuessInput from "./GuessInput";

function Game() {
  const [numberRange, setNumberRange] = useState({
    min: null,
    max: null
  });

  return (
    <div className="game">
      <h1 className="game__title">Guess the number</h1>

      {
        (numberRange.min !== null && numberRange.max !== null)
          ? <GuessInput numberRange={numberRange} />
          : <GameSettings
              onApply={(range) => setNumberRange(range)}
            />
      }
    </div>
  );
}

export default Game;
