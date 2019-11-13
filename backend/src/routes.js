const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/login', UserController.show);

module.exports = routes;

