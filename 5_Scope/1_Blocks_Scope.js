const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // blue 
}

logSkyColor();

// Code 1
const city = 'New York City';
const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());

// Global Variables - Variables declated outside of the block
const color = 'blue';
 
const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor());

// Code 2
let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

// Block Scope - local variables
const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  }
  
  logVisibleLightWaves();
  // console.log(lightWaves);

  // Global Namespace
  //


