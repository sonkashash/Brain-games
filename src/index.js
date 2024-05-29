import readlineSync from 'readline-sync';

import greetingsUser from './cli.js';

const checkAnswer = (taskTitle, getTaskFunc) => {
  const name = greetingsUser();
  const iterationsCount = 3;

  console.log(taskTitle);

  for (let i = 0; i < iterationsCount; i += 1) {
    const rightAnswer = getTaskFunc();
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer.toString() === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default checkAnswer;
