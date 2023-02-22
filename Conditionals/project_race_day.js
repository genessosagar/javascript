let raceNumber = Math.floor(Math.random() * 1000);
console.log(`The race number is ${raceNumber}`);
let registeredEarly = false;
let runnersAge = 18;
if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}
console.log(`The change in racenumber is ${raceNumber}`);

if (registeredEarly && runnersAge > 18) {
  console.log(`The runner numbered ${raceNumber} will race at 9:30 am`);
}
else if (runnersAge > 18 && !registeredEarly) {
  console.log(`The runner numbered ${raceNumber} will race at 11:00 am`);
}
else if (runnersAge < 18) {
  console.log(`The runner numbered ${raceNumber} will race at 12:30 pm`);
}
else {
  console.log(`The runner numbered ${raceNumber} please go to registration desk`);
}



