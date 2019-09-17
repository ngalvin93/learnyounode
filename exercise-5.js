const fs = require('fs');
const path = require('path');
const directory = process.argv[2];

fs.readdir(directory, function (err, files) {
    files.forEach(function (file) {
        if (path.extname(file) === `.${process.argv[3]}` )
        console.log(file)
    })
});

// node app.js /directory/img jpg