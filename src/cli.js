import readlineSync from 'readline-sync';

const greetingsUser = () => {
  console.log('\nWelcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  return nameUser;
};

// const checkGame = () => {
//   const nameGame = readlineSync.question('hexlet:brain-games $ ');
//   if (nameGame === 'brain-games') {
//     greetingsUser();
//   }
// };

export default greetingsUser;
