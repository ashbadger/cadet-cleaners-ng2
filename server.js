import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './tsconfig.json';

let app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(express.static(__dirname + '/dist'));

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
