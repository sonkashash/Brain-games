import greetingsUser from '../cli.js';
import { getTaskTitle, checkAnswer } from '../index.js';
import { getRandomNums } from '../utils.js';

const getTaskEven = (getRandomFunc) => getRandomFunc();

const getRightAnswerEven = (task) => (task % 2 ? 'no' : 'yes');

const brainEven = () => {
  const nameUser = greetingsUser();
  getTaskTitle('Answer "yes" if the number is even, otherwise answer "no".');
  checkAnswer(nameUser, getTaskEven, getRandomNums, getRightAnswerEven);
};

export default brainEven;
