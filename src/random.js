const getRandomNums = () => Math.ceil(Math.random() * 100);

const getRandomPair = () => {
  const num1 = Math.ceil(Math.random() * 10);
  const num2 = Math.ceil(Math.random() * 100);
  return [num1, num2];
};
export { getRandomNums, getRandomPair };
