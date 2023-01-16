import React, { useContext } from "react";
import { ScoreContext } from "./scoreContext";

function FinishedGame() {
  const [gameState] = useContext(ScoreContext);
  return (
    <>
      <p>Finished!</p>
      <p>
        Your score is {gameState.score}/{gameState.questionLimit}
      </p>
    </>
  );
}

export default FinishedGame;
