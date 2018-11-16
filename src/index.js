var  mongoose= require("mongoose");
var cors = require('cors')
var path = require('path')
 
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();
const routes = require('./routes');
app.use(cors());
app.use(bodyParser.json());



app.use('/',express.static(path.join(__dirname, 'build')))

// Set up mongoose connection
let dev_db_url = 'mongodb://localhost/test-1511';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
routes(app)
module.exports = app;