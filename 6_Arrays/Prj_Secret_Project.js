let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop(); // Removes the last element
console.log(secretMessage.length); // Finds the length of an array
secretMessage.push('to', 'Program'); // Adds to and program elements to the end of an array
secretMessage[secretMessage.indexOf('easily')] = 'right'; // Find the index easily and replace it to right
secretMessage.shift(); // Remove the first element of an array
secretMessage.unshift('Programming'); // Add an element to the beginning of an array
secretMessage.splice(6, 11, 'know'); // Removes the indexed elements from 6 to 10 and add know in that position
console.log(secretMessage);
console.log(secretMessage.join(' ')); // Joins all the elments with the space specified in the join method