// Importing the necessary module
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Creating the express application
const app = express();

// Using the body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Using the express router and making the process run on
// PORT: 3000
const router = express.Router();
const PORT = process.env.PORT || 5000;

// Serving the static assets
app.use(express.static('public'));

// Adding the first route using GET request (req)
app.get('/', (req, res) =>
{
    // Rendering the index.html page
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Adding the route for the csv file
app.get('/csvFile', (req, res) =>
{
    // Rendering the csv file
    res.sendFile(path.join(__dirname, 'ORIGINAL.csv'));
});



// Running the Nodejs server
app.listen(PORT,  () =>
{
    // Displaying the connection status
    console.log(`The Nodejs server is running on: 'localhost:${PORT}'`);
});
