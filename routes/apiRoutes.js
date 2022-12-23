const App = require('express').Router()
const db = require('../db/db.json')
const fs = require('fs')
const path = require('path')

//
App.get('/api/notes', function(req, res){
    // res.json(db);
    res.sendFile(path.join(__dirname, '../db/db.json'))
})

//
App.post('/api/notes', function(req, res) {
    const notes = req.body
    db.push(notes)
    console.log(db)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.sendFile(path.join(__dirname, '../db/db.json'))
})
// needed to update the body
App.put('', function (req,res) {

})
// need to pull the informtion from the existing notes.
App.get('', function(req, res) {
    getElementbyId
})

module.exports = App; 