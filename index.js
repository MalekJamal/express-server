'use strict';

require('dotenv').config();
const server = require('./server');
const PORT = process.env.PORT || 4001;

server.start(PORT);