let countString = '';
let i = 0;
console.log(countString);
do {
  countString = countString + i;
  //console.log(countString);
  i++;
} while (i < 5);
 
console.log(countString);

// Code 1
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

// ---------- Code -----------
// Write your code below
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded)


// 