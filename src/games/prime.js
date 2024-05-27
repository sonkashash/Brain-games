import greetingsUser from '../cli.js';
import { getTaskTitle, checkAnswer } from '../index.js';
import { getRandomNums, isPrime } from '../utils.js';

const getTaskPrime = () => getRandomNums();

const getRightAnswerPrime = (task) => {
  const res = isPrime(task) ? 'yes' : 'no';
  return res;
};

const brainPrime = () => {
  const nameUser = greetingsUser();
  getTaskTitle('Answer "yes" if given number is prime. Otherwise answer "no"');
  checkAnswer(nameUser, getTaskPrime, getRightAnswerPrime);
};

export default brainPrime;
