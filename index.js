// import the line-reader here
var lineReader = require('line-reader');
console.log(lineReader);
// read the fruits.txt file using the function 
lineReader.eachLine('./fruits.txt', function (line) {
    console.log(line);
    
});

