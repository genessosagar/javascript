/*
We sometimes want to find the location of an element in an array. 
That’s where the .findIndex() method comes in! Calling .findIndex() on 
an array will return the index of the first element that evaluates to true 
in the callback function.
*/

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen);
console.log(jumbledNums[3]);

const greaterThan1000 = jumbledNums.findIndex(num => num > 1000);
console.log(greaterThan1000);


// ------ code ------
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex(animal => {
//   if(animal === 'elephant') {
//     return true;
//   }
// });

// const foundAnimal = animals.findIndex(animal => animal === 'elephant');

const foundAnimal = animals.findIndex(function(animal) {
  return animal === 'elephant';
});

console.log(foundAnimal);

// const startsWithS = animals.findIndex(animal => {
//   if (animal[0] === 's') {
//     return true;
//   }
// });

// const startsWithS = animals.findIndex(animal => animal[0] === 's');

const startsWithS = animals.findIndex(function(animal) {
  return animal[0] === 's';
});

console.log(startsWithS);