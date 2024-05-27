import _ from 'lodash';

import greetingsUser from '../cli.js';
import { getTaskTitle, checkAnswer } from '../index.js';
import { getRandomPair, calculateExpression } from '../utils.js';

const getTaskCalc = () => {
  const [num1, num2] = getRandomPair();
  const operators = ['+', '-', '*'];
  const randomOperator = _.sample(operators);
  if (randomOperator === '+') {
    return `${num1} + ${num2}`;
  }
  if (randomOperator === '-') {
    return `${num1} - ${num2}`;
  }
  if (randomOperator === '*') {
    return `${num1} * ${num2}`;
  }
  return 0;
};

const getRightAnswerCalc = (task) => {
  const [num1, operator, num2] = task.split(' ');
  return calculateExpression(num1, num2, operator);
};

const brainCalc = () => {
  const nameUser = greetingsUser();
  getTaskTitle('What is the result of the expression?');
  checkAnswer(nameUser, getTaskCalc, getRightAnswerCalc);
};

export default brainCalc;
