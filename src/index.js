import readlineSync from 'readline-sync';

const getTaskTitle = (taskTitle) => {
  console.log(taskTitle);
};

const checkAnswer = (name, getTaskFunc, getRandomFunc, getRightAnswerFunc) => {
  for (let i = 0; i < 3; i += 1) {
    const task = getTaskFunc(getRandomFunc);
    const rightAnswer = getRightAnswerFunc(task);
    console.log(`Question: ${task}`);
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

export { getTaskTitle, checkAnswer };
