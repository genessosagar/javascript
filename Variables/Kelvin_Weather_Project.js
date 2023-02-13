// Constant kelvin variable created and assigned the value of 293
const kelvin = 293;
// celsius const variable created and subtracted 273 from kelvin
const celsius = kelvin - 273;
// Calculate farhenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Round the value using Math object floor method
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// Convert to newton scale
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`)