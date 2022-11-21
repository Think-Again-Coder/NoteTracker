const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')

const PORT = 3001;
const app = express();

// app.get('/',(req, res) => {
//     res.send(
//         ''
//     );
// });
app.use(express.json())
app.use(express.static('public'))
//sending my routes
app.use('/', htmlRoutes);
app.use('/', apiRoutes);



app.listen(PORT, function() {
    console.log('App is listening on PORT: ' + PORT)
});