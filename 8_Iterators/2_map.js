const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

// ------- Code --------
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
});

console.log(secretMessage.join(''));

const bigNumb = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumb.map(number => {
  return number/100;
});

console.log(smallNumbers);
