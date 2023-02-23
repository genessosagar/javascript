  // Helper Functions - These functions being called within another function 
  // are often referred to as helper functions.
  function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
  console.log(getFahrenheit(15)); // Returns 59


  // Another helper function
  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5, 4);
  
  console.log(totalCost);