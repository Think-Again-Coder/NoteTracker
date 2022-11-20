const express = require('express');
const htmlRoutes = require('./')

const PORT = 3001;
const app = express();

app.get('/',(req, res) => {
    res.send(
        ''
    );
});

//sending my routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


// app.get('/api', (req, res) => {

// })

app.listen(PORT, function() {
    console.log('App is listening on PORT: ' + PORT)
});