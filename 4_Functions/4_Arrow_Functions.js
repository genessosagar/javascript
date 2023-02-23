/*
Arrow functions remove the need to type out the keyword function 
every time you need to create a function.
*/
const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  };

  const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

// Zero Parameters
const functionName = () => {};

// One Parameter
const oneFunctionName = paramOne => {};

// Two Parameters
const twoFunctionName = (paramOne, paramTwo) => {};

// Single line block
const sumNumbers = number => number1 + number2;

//Multi-line Block
const sumNum = number => {
    const sum = number + number;
    return sum;
}


// Two ways of writing the same code
const squareNum = (num) => {
    return num * num;
  };

// We can refactor the function to
const squareNum1 = num => num * num;

// Refactor the following function
const plantNeedsWater1 = (day) => {
    return day === 'Wednesday' ? true : false;
  };

const plantNeedsWater2 = day => day === 'Wednesday' ? true : false;