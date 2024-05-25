import greetingsUser from '../cli.js';
import { getTaskTitle, checkAnswer } from '../index.js';
import { getRandomPair, findGcd } from '../utils.js';

const getTaskGcd = (getRandomFunc) => {
  const [num1, num2] = getRandomFunc();
  return `${num1} ${num2}`;
};

const getRightAnswerGcd = (task) => {
  const [num1, num2] = task.split(' ');
  return findGcd(num1, num2);
};

const brainGcd = () => {
  const nameUser = greetingsUser();
  getTaskTitle('Find the greatest common divisor of given numbers.');
  checkAnswer(nameUser, getTaskGcd, getRandomPair, getRightAnswerGcd);
};

export default brainGcd;
