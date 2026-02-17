
function GameInfo({ settings }) {
  const { min, max, playerName } = settings;

  return (
    <div className="game__info">
      <p className="text">
        Hello, {playerName}! <br />
        Range: {min} - {max}.
      </p>
    </div>
  );
}

export default GameInfo;
