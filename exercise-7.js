const http = require('http');
const url = process.argv[2]; // url variable provided in argument

http.get(url, function callback (response) {
    response.setEncoding('utf8')
    response.on('data', (data) => console.log(data))
    response.on('error', (error) => console.log(error))
})