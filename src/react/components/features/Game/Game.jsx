import GameSettings from "./GameSettings";
import GuessInput from "./GuessInput";

function Game() {
  return (
    <div className="game">
      <h1 className="game__title">Guess the number</h1>

      <div className="mb-5">
        <GameSettings />
      </div>
      <GuessInput />
    </div>
  );
}

export default Game;
