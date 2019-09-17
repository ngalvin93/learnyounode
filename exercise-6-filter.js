// const fs = require('fs');
// const path = require('path');
// const directory = process.argv[2];

// module.exports = fs.readdir(directory, function (err, files) {
//     files.forEach(function (file) {
//         if (path.extname(file) === `.${process.argv[3]}` )
//         console.log(file)
//     })
// });

//


var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}