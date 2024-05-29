import checkAnswer from '../index.js';
import { getRandomPair, findGcd } from '../utils.js';

const getTaskGcd = () => {
  const [num1, num2] = getRandomPair();

  console.log(`Question: ${num1} ${num2}`);
  return findGcd(num1, num2);
};

const brainGcd = () => {
  const taskTitle = 'Find the greatest common divisor of given numbers.';
  checkAnswer(taskTitle, getTaskGcd);
};

export default brainGcd;
