const http = require('http');
const https = require('https');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const config = require('./tsconfig.json');

var options = {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
};

let app = express();

app.server = https.createServer(options, app);

app.use(morgan('dev'));

app.use(express.static(__dirname + '/dist'));

console.log(process.env.PORT)
console.log(config.port)

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});


// const express = require('express');
// const app = express();

// // Run the app by serving the static files
// // in the dist directory

// app.use(express.static(__dirname + '/dist'));
// console.log(__dirname + '/dist');

// // Start the app by listening on the default
// // Heroku port

// app.listen(process.env.PORT || 8080);
// console.log(process.env.PORT || 8080);
