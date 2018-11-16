require('dotenv').config();

// import app from './src/index';
var app = require('./src/index')
let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});