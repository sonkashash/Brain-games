import _ from 'lodash';

import checkAnswer from '../index.js';
import { getRandomPair, calculateExpression } from '../utils.js';

const getTaskCalc = () => {
  const [num1, num2] = getRandomPair();
  const operators = ['+', '-', '*'];
  const randomOperator = _.sample(operators);
  console.log(`Question: ${num1} ${randomOperator} ${num2}`);
  return calculateExpression(num1, num2, randomOperator);
};

const brainCalc = () => {
  const taskTitle = 'What is the result of the expression?';
  checkAnswer(taskTitle, getTaskCalc);
};

export default brainCalc;
