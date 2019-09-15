// var fs = require('fs'); // loads file system module from node library

// function callback (error, utf8, data) {
//     if (error) {
//         return console.error(error);
//     } else if (utf8) {
//         console.log(utf8)
//     } else {
//         var resultJoin = data.join('\n')
//         console.log(resultJoin.length - 1)
//     }

// }

// fs.readFile(process.argv[2], callback);

  
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})