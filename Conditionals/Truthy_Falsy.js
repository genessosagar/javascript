/*
Sometimes, you’ll want to check if a variable exists and 
you won’t necessarily want it to equal a specific value — 
you’ll only check to see if the variable has been assigned a value.

Falsy values - 0, "", '', null, undefined, NaN
*/

let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

// Change the variable wordCount
let wordCount = 20;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

// Change the favoritePhrase to some string
let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}