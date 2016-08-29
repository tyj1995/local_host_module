"use strict"
require('dotenv').config();
const express = require('express');
const compression = require('compression');

let port = process.env.PORT;
let app = express();

app.listen(port);
console.log('listening on port: ', port);

app.use(compression());
app.use(express.static(__dirname + '/../app'));

module.exports =  app;
