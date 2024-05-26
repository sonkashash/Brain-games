import greetingsUser from '../cli.js';
import { getTaskTitle, checkAnswer } from '../index.js';
import { getRandomNums, getRandomFromRange } from '../utils.js';

const getTaskProgression = () => {
  const progressionArr = [];
  const firstEl = getRandomNums();
  const stepProgression = getRandomNums();
  const lastEl = firstEl + 10 * stepProgression;
  const hideEl = getRandomFromRange(firstEl, lastEl, stepProgression);

  for (let i = firstEl; i < lastEl; i += stepProgression) {
    if (i === hideEl) {
      progressionArr.push('..');
    } else {
      progressionArr.push(i);
    }
  }

  return progressionArr.join(' ');
};

const getRightAnswerProgression = (task) => {
  const progression = task.split(' ');

  for (let i = 0; i < progression.length; i += 1) {
    if (progression[i] === '..' && i !== 0 && i !== progression.length - 1) {
      return (Number(progression[i - 1]) + Number(progression[i + 1])) / 2;
    }

    if (progression[i] === '..' && i === 0) {
      return 2 * Number(progression[i + 1]) - Number(progression[i + 2]);
    }

    if (progression[i] === '..' && i === progression.length - 1) {
      return 2 * Number(progression[i - 1]) - Number(progression[i - 2]);
    }
  }
  return 0;
};

const brainProgression = () => {
  const nameUser = greetingsUser();
  getTaskTitle('What number is missing in the progression?');
  checkAnswer(nameUser, getTaskProgression, getRightAnswerProgression);
};

export default brainProgression;
