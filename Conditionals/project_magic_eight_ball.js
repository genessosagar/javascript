let userName = "Sagar";

userName ? console.log("Hello, " + userName) : console.log("Hello!");

const userQuestion='How is UK weather?';

console.log(userName + ' asked the following question ' + userQuestion);

console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

console.log(`Random number is ${randomNumber}`)

let eightBall = '';
switch (randomNumber) {
  case 0 :
    eightBall = 'It is certain';
    break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2 :
    eightBall = 'Reply hazy try again';
    break;
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall = 'Do not count on it';
    break;
  case 5 :
    eightBall = 'My sources say no';
    break;
  case 6 :
    eightBall = 'Outlook not so good';
    break;
  case 7 :
    eightBall = 'Signs point to yes';
    break;
  default :
    console.log('The number not in range');
    break;
}

console.log(eightBall);