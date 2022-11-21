const path = require('path'); 
const App = require('express').Router()
const fs = require('fs')

App.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

App.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = App;