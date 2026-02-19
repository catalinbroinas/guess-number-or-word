import { useState } from "react";
import GameSettings from "./GameSettings/GameSettings";
import GuessInput from "./GuessInput";
import { randomInt } from "../../../../js/utils/numberUtils";
import Feedback from "./Feedback";
import GameControls from "./GameControls";
import GameInfo from "./GameInfo";
import GameResult from "./GameResult";

function Game() {
  // Date
  const GAME_STATUS = {
    idle: 'idle',
    playing: 'playing',
    end: 'end'
  };
  const GAME_RESULT = {
    won: 'won',
    lost: 'lost'
  };
  const FEEDBACK_MESSAGES = {
    tooLow: (number) => `Number ${number} is too small.`,
    tooHigh: (number) => `Number ${number} is too high.`,
  };

  // State
  const [settings, setSettings] = useState({
    min: null,
    max: null,
    mode: 'single',
    player1Name: '',
    player2Name: '',
    attempts: null
  });
  const [secretNumber, setSecretNumber] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.idle);
  const [gameResult, setGameResult] = useState(null);

  const handleApplyRange = (newSettings) => {
    const { min, max } = newSettings;
    
    setSettings(newSettings);
    setSecretNumber(randomInt(min, max));
    setGameStatus(GAME_STATUS.playing);
  };

  const handleGuess = (guess) => {
    const nextAttempts = settings.attempts !== null 
      ? settings.attempts - 1
      : null;
    if (nextAttempts !== null) {
      setSettings({ ...settings, attempts: nextAttempts })
    }

    if (guess === secretNumber) {
      setGameResult(GAME_RESULT.won);
      setGameStatus(GAME_STATUS.end);
      return;
    }

    const hasAttemptsLeft = nextAttempts === null || nextAttempts > 0;
    if (!hasAttemptsLeft) {
      setGameResult(GAME_RESULT.lost);
      setGameStatus(GAME_STATUS.end);
      return;
    }

    guess > secretNumber 
      ? setFeedbackMessage(FEEDBACK_MESSAGES.tooHigh(guess))
      : setFeedbackMessage(FEEDBACK_MESSAGES.tooLow(guess));
  };

  const handleResetGame = () => {
    setGameStatus(GAME_STATUS.idle);
    setSettings({
      ...settings,
      min: null,
      max: null,
      player1Name: '',
      player2Name: '',
      attempts: null});
    setSecretNumber(null);
    setFeedbackMessage('');
  };

  return (
    <div className="game">
      <h1 className="game__title">Guess the number</h1>

      {gameStatus === GAME_STATUS.idle && (
        <GameSettings onApply={handleApplyRange} />
      )}

      {gameStatus === GAME_STATUS.playing && (
        <>
          <GameInfo settings={settings} />

          <Feedback message={feedbackMessage} />

          <GuessInput 
            numberRange={settings} 
            onGuess={handleGuess} 
          />
        </>
      )}

      {gameStatus === GAME_STATUS.end && (
        <>
          <GameResult
            playerName={settings.player1Name}
            result={gameResult}
          />
          
          <GameControls onReset={handleResetGame} />
        </>
      )}
    </div>
  );
}

export default Game;
