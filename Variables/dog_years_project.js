// myAge const variable created
const myAge = 33;

// earlhyYears var created mutable
let earlyYears = 2;
earlyYears *= 10.5;

// laterYears variable created
let laterYears = myAge - 2;

// Multiplying laterYears by 4
laterYears *= 4;

console.log('Early Years: ' + earlyYears);
console.log('Later Years: ' + laterYears);

// Adding early and later years to a variable myAgeInDogYears variable
let myAgeInDogYears = earlyYears + laterYears;

// toLowerCase string method used to convert the name to lowercase
const myName = 'Sagar'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

