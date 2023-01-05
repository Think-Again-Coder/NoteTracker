const App = require('express').Router()
const db = require('../db/db.json')
const fs = require('fs')
const path = require('path')

// This is a get route that requests files from a certain path
App.get('/api/notes', function(req, res){
    // res.json(db);
    res.sendFile(path.join(__dirname, '../db/db.json'))
})

// This is the post route that displays the notes that were returned in response.
App.post('/api/notes', function(req, res) {
    const notes = req.body
    db.push(notes)
    console.log(db)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.sendFile(path.join(__dirname, '../db/db.json'))
})

module.exports = App; 