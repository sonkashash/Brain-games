import checkAnswer from '../index.js';
import { checkProperty, isPrime } from '../utils.js';

const getTaskPrime = () => checkProperty(isPrime);

const brainPrime = () => {
  const taskTitle = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  checkAnswer(taskTitle, getTaskPrime);
};

export default brainPrime;
