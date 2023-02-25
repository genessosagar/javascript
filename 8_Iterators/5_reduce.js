const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
// accumulator is first element = 1
// currentValue is second element = 2

console.log(summedNums) // Output: 17

// ----------- Code ------------

const numb = [1, 2, 4, 10];
 
const summedNumb = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

// Accumulator = 100
// currentValue = 1
console.log(summedNumb); // Output: 117

// ------- Code --------

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);

// -------- Code -------

