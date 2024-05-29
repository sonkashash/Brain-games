import checkAnswer from '../index.js';
import { getRandomNums, isPrime } from '../utils.js';

const getTaskPrime = () => {
  const number = getRandomNums();

  console.log(`Question: ${number}`);
  return isPrime(number) ? 'yes' : 'no';
};

const brainPrime = () => {
  const taskTitle = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  checkAnswer(taskTitle, getTaskPrime);
};

export default brainPrime;
