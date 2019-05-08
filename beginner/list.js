var fs = require('fs');

function listall() {
    fs.readdir('.', function cb(err, list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].endsWith('.js'))
                console.log(list[i]);
        }
    });
}

listall();
