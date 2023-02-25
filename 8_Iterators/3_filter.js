const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words);
console.log(shortWords);

// ------ Code --------
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
// const smallNumbers = randomNumbers.filter(rand => {
//   if (rand < 250) {
//     return true;
//   }
// });

// const smallNumbers = randomNumbers.filter(function(number){
//   return number < 250;
//  })

const smallNumbers = randomNumbers.filter(number => number < 250 );
 

console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
// const longFavoriteWords = favoriteWords.filter(word => word.length > 7 );

// const longFavoriteWords = favoriteWords.filter(function(word) {
//   if (word.length > 7) {
//     return true;
//   }
// });

const longFavoriteWords = favoriteWords.filter(
  function(word) {
    return word.length > 7
  }
);

console.log(longFavoriteWords);

