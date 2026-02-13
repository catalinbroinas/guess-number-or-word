import { useState } from "react";
import GameSettings from "./GameSettings";
import GuessInput from "./GuessInput";
import { randomInt } from "../../../../js/utils/numberUtils";

function Game() {
  // State
  const [numberRange, setNumberRange] = useState({
    min: null,
    max: null
  });
  const [secretNumber, setSecretNumber] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [gameStatus, setGameStatus] = useState("idle");

  return (
    <div className="game">
      <h1 className="game__title">Guess the number</h1>

      {gameStatus === 'idle' && (
        <GameSettings onApply={() => {}} />
      )}
    </div>
  );
}

export default Game;
