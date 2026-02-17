
function GameResult({ playerName }) {
  return (
    <div className="game__result">
      <p className="alert-success">
        Congratulation{playerName && `, ${playerName}`}!
      </p>
    </div>
  );
}

export default GameResult;
