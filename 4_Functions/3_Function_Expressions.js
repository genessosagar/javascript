// Anonymous Functions - Function Expressions
const calculateArea = function(width, height) {
    const area = width * height;
    return area;
}

/*
Unlike function declarations, function expressions are not hoisted 
so they cannot be called before they are defined. 
*/

const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true;
    }
    else {
      return false;
    }
  }
  
  console.log(plantNeedsWater('Tuesday'));

  console.log(plantNeedsWater('Wednesday'));