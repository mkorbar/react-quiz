export const shuffleArray = (arr) => {
  const a = [...arr];
  a.sort(() => Math.random() - 0.5);
  return a;
};
