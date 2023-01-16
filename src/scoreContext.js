import { createContext } from "react";

export const ScoreContext = createContext([
  { score: 0, questionIdx: 0, state: "playing" },
  () => {},
]);
