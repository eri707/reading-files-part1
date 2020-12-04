// import the line-reader here
var lineReader = require('line-reader');
// read the fruits.txt file using the function 
lineReader.eachLine('./fruits.txt', function (line) {
    console.log(line);
});

