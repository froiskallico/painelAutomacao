const Circuit = require('../models/Circuit');

module.exports = async() => {
  await Circuit.loadAll();
}