// print 5 to 10
for (let i = 5; i <= 10; i++)
{
  console.log(i);
}

// Reverse
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// Looping through Arrays
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

// Looping Arrays -2 
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++)
{
  console.log('I would love to visit ' + vacationSpots[i]);
}

// Nested Loops
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

// Nested Loop - 2
// Write your code below
const bobsFollowers = ['Sagar', 'Honey', 'Neera', 'Sitara'];
const tinasFollowers = ['Neera', 'Niharika', 'Sitara'];
let mutualFollowers = [];
for (let i = 0 ; i < bobsFollowers.length ; i++)
{
  for (let j = 0 ; j < tinasFollowers.length ; j++)
  {
    if (bobsFollowers[i] === tinasFollowers[j])
    {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowers)

