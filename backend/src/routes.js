const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const CircuitController = require('./controllers/CircuitController');

routes.get('/login', UserController.show);

routes.get('/circuit', CircuitController.show);

routes.get('/circuits', CircuitController.index);

module.exports = routes;

