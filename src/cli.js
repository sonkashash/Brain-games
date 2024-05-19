import readlineSync from 'readline-sync';

const greetingsUser = () => {
  const nameUser = readlineSync.question('May I have your name?');
  console.log(`Hello, ${nameUser}!`);
};

const checkGame = () => {
  const nameGame = readlineSync.question('hexlet:brain-games $ ');
  if (nameGame === 'brain-games') {
    greetingsUser();
  }
};

export { checkGame, greetingsUser };
