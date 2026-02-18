
function GameInfo({ settings }) {
  const { min, max, playerName, attempts } = settings;

  return (
    <div className="game__info">
      <p className="text">
        Hello, {playerName}! <br />
        Range: {min} - {max}. <br />
        Attempts left: {attempts}
      </p>
    </div>
  );
}

export default GameInfo;
