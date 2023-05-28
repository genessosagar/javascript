const higherOrderFunc = param => {
    console.log(param());
    return `I just invoked ${param.name} as a callback function!`
  }
   
  const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
  }
   
console.log(higherOrderFunc(anotherFunc));
/*

  higherOrderFunc(() => {
    for (let i = 0; i <= 10; i++){
      console.log(i);
    }
  });


  // ------ Code -------

  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    return checkA === checkB ? func(val) : 'inconsistent results';  
  }
  
  console.log(checkConsistentOutput(addTwo, 10));

  */