
function GameResult({ result, playerName }) {
  const typeMessage = result === 'won' ? 'success' : 'danger';
  const message = result === 'won' ? 'Congratulation' : 'You lost';
  return (
    <div className="game__result">
      <p className={`alert-${typeMessage}`}>
        {message}{playerName && `, ${playerName}`}!
      </p>
    </div>
  );
}

export default GameResult;
