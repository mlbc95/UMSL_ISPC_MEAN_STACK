const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./server/config/database');

//Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {useMongoClient: true})
    .then(() => console.log('Connected to database'))
    .catch((error) => console.log('Error on connection '+error));

//Init Express App Variable
const app = express();

//Load Routes
const todos = require('./server/routes/todos');

//CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

//PORT Number
const port = 3000;

//Use the routes
app.use('/todos', todos);

//Index Test Route
app.get('/', (req, res) => {
    res.send('UMSL ISPC Index Testing Changed Again');
})

//Start Server
app.listen(port, () => {
    console.log('Server started on port '+port); //Server started on port 3000
})