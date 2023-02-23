// console.log('hi');

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }
    else {
      console.log('Enter the correct input - rock, paper, scissors');
    }
  };
  
  
  console.log(getUserChoice('Paper'));
  
  const getComputerChoice = () => {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  let compCho = getComputerChoice();
  console.log(compCho);
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Game was a tie';
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper') {
        return 'Computer Won'
      }
      else {
        return 'User Won'
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors') {
        return 'Computer Won'
      }
      else {
        return 'User Won'
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock') {
        return 'Computer Won'
      }
      else {
        return 'User Won'
      }
    }
  }
  
  console.log(determineWinner(getUserChoice('Paper'), compCho));