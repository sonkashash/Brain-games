import checkAnswer from '../index.js';
import { getRandomNums, isEven } from '../utils.js';

const getTaskEven = () => {
  const number = getRandomNums();

  console.log(`Question: ${number}`);
  return isEven(number) ? 'yes' : 'no';
};

const brainEven = () => {
  const taskTitle = 'Answer "yes" if the number is even, otherwise answer "no".';
  checkAnswer(taskTitle, getTaskEven);
};

export default brainEven;
