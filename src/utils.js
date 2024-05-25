const getRandomNums = () => Math.ceil(Math.random() * 100);

const getRandomPair = () => {
  const num1 = Math.ceil(Math.random() * 10) * Math.ceil(Math.random() * 10);
  const num2 = Math.ceil(Math.random() * 100);
  return [num1, num2];
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

export { getRandomNums, getRandomPair, findGcd };
