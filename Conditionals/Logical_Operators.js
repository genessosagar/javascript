/*
the and operator (&&)
the or operator (||)
the not operatorbang operator (!)
*/
let stopLight = 'green';
let pedestrians = 0;
if (stopLight === 'green' && pedestrians === 0) {
    console.log('Go!');
}
else {
    console.log('Stop');
}

let day = 'Saturday';
if (day === 'Saturday' || day === 'Sunday'){
    console.log('Enjoy your weekend!')
}
else {
    console.log('Time to work, wait for weekend :-(')
}

let excited = true;
console.log(!excited);

let sleepy = false;
console.log(!sleepy);


let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
}
else {
  console.log('not bed time yet');
}