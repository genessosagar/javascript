let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger

// Short circuti evaluation
let myusername = '';
let mydefaultName = myusername || 'Stranger';
/*Because || or statements check the left-hand condition first, 
the variable defaultName will be assigned the actual value of username 
if it is truthy, and it will be assigned the value of 'Stranger' 
if username is falsy.
*/

console.log(mydefaultName); // Prints: Stranger


// Assign value of tool to marker and see the change in the output
let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);