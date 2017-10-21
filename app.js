const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./server/config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI, {useMongoClient: true})
    .then(() => console.log(`Connected to database`))
    .catch((err) => console.log(`Error on connection ${err}`));

const app = express();

//Load routes
const todos = require('./server/routes/todos');

//CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

const port = 3000;

//Use routes
app.use('/todos', todos);

//Index test route
app.get('/', (req, res) => {
    res.send('Testing index');
});

app.listen(port, () => {
    console.log('Server started on port '+port);
});