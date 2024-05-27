import _ from 'lodash';

const getRandomNums = () => Math.ceil(Math.random() * 10 * Math.random() * 10);

const getRandomPair = () => {
  const num1 = Math.ceil(Math.random() * 10 * Math.random() * 10);
  const num2 = Math.ceil(Math.random() * 100);
  return [num1, num2];
};

const getRandomFromRange = (min, max, step) => {
  const range = [];
  for (let i = min; i < max; i += step) {
    range.push(i);
  }
  return _.sample(range);
};

const calculateExpression = (num1, num2, operator) => {
  let res;
  const operand1 = Number(num1);
  const operand2 = Number(num2);
  if (operator === '+') {
    res = operand1 + operand2;
  }
  if (operator === '-') {
    res = operand1 - operand2;
  }
  if (operator === '*') {
    res = operand1 * operand2;
  }
  if (operator === '/') {
    res = operand2 ? operand1 / operand2 : 'Division by 0 is prohibited';
  }
  return res;
};

// Find the greatest common divisor of given numbers
const findGcd = (a, b) => {
  if (a === 0 || b === 0) return 0;
  let first = Math.abs(a);
  let second = Math.abs(b);
  if (first < second) {
    const variable = first;
    first = second;
    second = variable;
  }
  if (first % second === 0) {
    return second;
  }
  return findGcd(first - second, second);
};

const isPrime = (num) => {
  const number = Number(num);
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  getRandomNums, getRandomPair, getRandomFromRange, calculateExpression, findGcd, isPrime,
};
