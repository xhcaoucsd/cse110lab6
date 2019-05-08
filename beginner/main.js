var filterFiles = require('./filter');

function printfile(filename) {
    console.log(filename);
}
filterFiles(process.argv[2], printfile)

