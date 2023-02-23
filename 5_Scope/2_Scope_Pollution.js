let num = 50;
 
const logNum = () => {
  num = 100; // Take note of this line of code forgot to use keyword let
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100


// Code - 2

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

// Code - 3
const logSkyColor = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
      let color = 'pink';
      console.log(color); // Prints "pink"
    }
    console.log(color); // Prints "blue"
  };
   
  // console.log(color); // throws a ReferenceError


  // Code
  const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();