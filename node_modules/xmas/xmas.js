var figlet = require('figlet');

function xmas() {
    figlet('XMAS TIME!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}

module.exports = xmas;
