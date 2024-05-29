import checkAnswer from '../index.js';
import { checkProperty, isEven } from '../utils.js';

const getTaskEven = () => checkProperty(isEven);

const brainEven = () => {
  const taskTitle = 'Answer "yes" if the number is even, otherwise answer "no".';
  checkAnswer(taskTitle, getTaskEven);
};

export default brainEven;
