import _ from 'lodash';

import greetingsUser from '../cli.js';
import { getTaskTitle, checkAnswer } from '../index.js';
import { getRandomPair } from '../random.js';

const getTaskCalc = (getRandomFunc) => {
  const [num1, num2] = getRandomFunc();
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
  const operand1 = Number(num1);
  const operand2 = Number(num2);
  if (operator === '+') {
    return operand1 + operand2;
  }
  if (operator === '-') {
    return operand1 - operand2;
  }
  if (operator === '*') {
    return operand1 * operand2;
  }
  return 0;
};

const brainCalc = () => {
  const nameUser = greetingsUser();
  getTaskTitle('What is the result of the expression?');
  checkAnswer(nameUser, getTaskCalc, getRandomPair, getRightAnswerCalc);
};

export default brainCalc;
