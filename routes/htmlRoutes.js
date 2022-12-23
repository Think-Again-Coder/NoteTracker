const path = require('path'); 
const App = require('express').Router()
const fs = require('fs')

//route creates a connection to the index.html file. 
App.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//route created a connection to the notes file.
App.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// 
// App.get('', function (req, res) {
//     res.sendfile(path.join(__dirname, ''))
// });

//
module.exports = App;