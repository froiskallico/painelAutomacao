const Circuit = require('../models/Circuit');

module.exports = {
    async index(req, res) { 
        var params = req.query;

        var circuits = await Circuit.find(params);

        res.send(circuits);
    },

    async update(req, res) {
        var params = req.query;

        var circuits = await Circuit.find(params)
        
        circuits.forEach((circuit) => {
            circ = Circuit;

            circ.create(circuit);

            circ.toggle();
        });

        res.send(await Circuit.find(params));
    },
}

