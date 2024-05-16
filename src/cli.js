import readlineSync from "readline-sync";

const checkGame = () => {
    const nameGame = readlineSync.question("hexlet:brain-games $ ");
    if (nameGame === "brain-games") {
        greetingsUser();
    }
}

const greetingsUser = () => {
  const nameUser = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${nameUser}!`);
};

export {checkGame, greetingsUser};
