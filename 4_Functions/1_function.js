greetWorld();

function greetWorld() {
    console.log('Hello World');
}

function getReminder() {
    console.log('Water the plants.')
  }
  
  function greetInSpanish() {
    console.log('Buenas tardes.')
  }

  function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Cole');

  // Default Parameters
  function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
   
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!

  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  // Return
  function rectangleArea(width, height) {
    let area = width * height;
    return area;
  }
  
  // The code after the return will not be executed
  function monitorCount(rows, columns) {
    return (rows * columns);
  }
  
  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors);
