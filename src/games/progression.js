import checkAnswer from '../index.js';
import { getRandomNums, getRandomFromRange } from '../utils.js';

const getTaskProgression = () => {
  const progressionArr = [];
  const firstEl = getRandomNums();
  const stepProgression = getRandomNums();
  const lengthProgression = 10;
  const lastEl = firstEl + lengthProgression * stepProgression;
  const hideEl = getRandomFromRange(firstEl, lastEl, stepProgression);

  for (let i = firstEl; i < lastEl; i += stepProgression) {
    if (i === hideEl) {
      progressionArr.push('..');
    } else {
      progressionArr.push(i);
    }
  }

  console.log(`Question: ${progressionArr.join(' ')}`);
  return hideEl;
};

const brainProgression = () => {
  const taskTitle = 'What number is missing in the progression?';
  checkAnswer(taskTitle, getTaskProgression);
};

export default brainProgression;
