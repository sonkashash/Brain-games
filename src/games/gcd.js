import greetingsUser from '../cli.js';
import { getTaskTitle, checkAnswer } from '../index.js';
import { getRandomPair, findGcd } from '../utils.js';

const getTaskGcd = () => {
  const [num1, num2] = getRandomPair();
  return `${num1} ${num2}`;
};

const getRightAnswerGcd = (task) => {
  const [num1, num2] = task.split(' ');
  return findGcd(num1, num2);
};

const brainGcd = () => {
  const nameUser = greetingsUser();
  getTaskTitle('Find the greatest common divisor of given numbers.');
  checkAnswer(nameUser, getTaskGcd, getRightAnswerGcd);
};

export default brainGcd;
