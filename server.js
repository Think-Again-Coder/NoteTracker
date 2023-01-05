//Requiring the routes neccessary to process application and Express
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

const PORT = 3001;
// const port = process.env.PORT || 3001;
const app = express();

// Use method to bring in the json files and static files for styling(css).
app.use(express.json())
app.use(express.static('public'))

//sending my routes for api's and html elements too. 
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

//function to listen to port for the application along with a console log printing the port. 
app.listen(PORT, function() {
    console.log('App is listening on PORT: ' + PORT)
});