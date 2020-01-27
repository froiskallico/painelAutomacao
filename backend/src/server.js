const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const loadAllCircuits = require('./utils/loadAllCircuits');

const app = express();

loadAllCircuits();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

console.log("Server ON...")
