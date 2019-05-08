var fs = require('fs');

var linecount = undefined;

function countlines(callback) {
    fs.readFile('./test', function doneReading(err, fileContents) {
        linecount = fileContents.toString().split('\n').length - 1;
        callback();
    });
}

function printCount() {
    console.log(linecount);
}

countlines(printCount);
/*var buf = fs.readFileSync('./test');
var str = buf.toString();
console.log((str.split('\n')).length - 1 );
*/
