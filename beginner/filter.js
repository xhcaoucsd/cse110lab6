var fs = require('fs');

module.exports = function filterFiles (pathToDir, callback) {
    fs.readdir(pathToDir, function cb(err, list) {
        for (var i = 0; i < list.length; i++) {
        if (list[i].endsWith('.js'))
            callback(list[i]);
        }
    });
}
