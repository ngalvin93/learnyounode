var fs = require('fs'); // loads the fs module from the Node core library

var result = fs.readFileSync(process.argv[2], 'utf8'); // reads a file synchronously and returns the content as 'result', adding 'utf8' as the second argument will convert into a string, thus removing the toString method below

//var resultStr = result.toString(); // converts the buffer object into a string

var splitString = result.split('\n') // splits the input string at the new lines

console.log(splitString.length - 1); // subtract one to account for the last line