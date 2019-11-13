const Circuit = require('../models/Circuit');

module.exports = {
    async index(req, res) { 
        var params = req.query;

        var circuits = await Circuit.find(params);

        res.send(circuits);
        
    },

    async show(req, res) {
        const { id } = req.query;
        
        var circuit = await Circuit.findById(id);     

        res.send(circuit);
    },
}