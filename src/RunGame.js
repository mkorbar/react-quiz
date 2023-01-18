import { ScoreContext } from "./scoreContext";
import PlayGame from "./PlayGame";
import FinishedGame from "./FinishedGame";
import React, { useState } from "react";
import { shuffleArray } from "./utils";

const DEFAULT_QUESTION_LIMIT = 10;

const RunGame = (params) => {
  const questionLimit =
    params.questions.length > DEFAULT_QUESTION_LIMIT
      ? DEFAULT_QUESTION_LIMIT
      : params.questions.length;
  const selectedQuestions = shuffleArray(params.questions).slice(
    0,
    questionLimit
  );
  const [gameState, setGameState] = useState({
    score: 0,
    questionIdx: 0,
    questionLimit: questionLimit,
    questions: selectedQuestions,
  });

  function isGameActive() {
    return gameState.questionIdx < gameState.questionLimit;
  }

  return (
    <ScoreContext.Provider value={[gameState, setGameState]}>
      {isGameActive() ? <PlayGame /> : <FinishedGame />}
    </ScoreContext.Provider>
  );
};

export default RunGame;
