// Mathematical Operators
// +, -, +=, -=, *=, /=
let w = 4;
w = w + 1;
console.log(w);
w += 1;
console.log(w);

let x = 20;
x -= 5;
console.log('x = ' + x);

let y = 50;
console.log('y = ' + y)
y *= 2;
console.log('y = ' + y)

let z = 8;
console.log('z = ' + z)
z /= 2;
console.log('z = ' + z)

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;


// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

// Will Math assignment operators work with other Data types?
let baz = true;
console.log('baz = ' + baz);

// Boolean + Number
baz += 1;
console.log('baz = ' + baz);

// String + Boolean
let foo = 'foo';
console.log('foo val = ' + foo);

foo += false;
console.log('foo val = ' + foo);

// String + Number
foo += 7;
console.log('foo val = ' + foo)