let input = 'Sun rises in the east';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
for (let i = 0 ; i < input.length ; i++)
{
  // console.log('i is '+ i);
  if (input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);    
  }
  for (let j = 0 ; j < vowels.length ; j++)
  {
    // console.log(j);
    if (input[i] === vowels[j]) {
      console.log(input[i]);
      resultArray.push(input[i]);
    }
  };
};
console.log(resultArray);
let resultString = resultArray.join('');
console.log(resultString.toUpperCase());