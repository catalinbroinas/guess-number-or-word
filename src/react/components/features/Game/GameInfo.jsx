
function GameInfo({ settings }) {
  const { min, max, player1Name, attempts } = settings;

  return (
    <div className="game__info">
      <p className="text">
        {player1Name && <>Hello, {player1Name}! <br /></>}
        Range: {min} - {max}. <br />
        Attempts left: {attempts ?? 'Unlimited'}
      </p>
    </div>
  );
}

export default GameInfo;
