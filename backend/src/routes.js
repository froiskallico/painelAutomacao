const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');
const CircuitController = require('./controllers/CircuitController');

routes.post('/login', UserController.show);

routes.get('/circuits', CircuitController.index);

routes.put('/circuits', CircuitController.update);

module.exports = routes;