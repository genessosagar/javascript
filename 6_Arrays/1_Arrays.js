let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
let concepts = ['creating arrays', 'array structures', 'array manipulation'];

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments = ['Mayo'];
console.log(condiments);
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon';
condiments[0] = 'Mayo';
console.log(condiments);
console.log(utensils);

// let keyword defined arrays can be re-assigned to new array
// const keyword defined arrays cannot be re-assigned to new array

// lenght property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// Push method - allows to add items to the end of the array
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 

// Code
const chores = ['wash dishes', 'do laundry', 'take out trash'];
 chores.push('Cooking', 'Attending Calls');
 console.log(chores);

 // Pop method
 const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

// .join(), .slice(), .splice(), .shift(), .unshift(), and .concat()
// More Array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const pastaIndex = groceryList.indexOf('pasta');
console.log('Pasta Index - ' + pastaIndex);
console.log(groceryList.slice(1, 4));
groceryList.unshift('popcorn'); // Adds the element to the first of the array
console.log(groceryList);
groceryList.shift(); // Removes the first element of array
console.log(groceryList);

