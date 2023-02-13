// If Statement

if (true) {
    console.log('This message will print')
}

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}

// If..Else..Statement
if (false) {
    console.log('The code in this block will not run');
}
else{
    console.log('This code will run in else block');
}

// Else if statement
let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}


// Else if statement
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}
else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
}
else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
}
else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid season.');
}

