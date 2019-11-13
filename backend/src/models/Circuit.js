const sqlite = require('sqlite-sync');
const path = require('path');

const database = path.resolve(__dirname, '..', '..', 'database', 'database.db');

sqlite.connect(database);

var Circuit = {
    _id: '',
    _name: '',
    _description: '',
    _type: '',
    _father: '',
    _state: '',
    _defaultState: '',

    async find(params) {
        console.log(params);

        var paramsKeys = Object.keys(params);

        var stringWhere = '';

        if(paramsKeys.length > 1) {
            paramsKeys.forEach(function(key) {
                stringWhere = stringWhere + key + " = " + params[key] + " AND ";                
            })

            stringWhere = stringWhere.slice(0, -5);
        } else if (paramsKeys.length = 1) {
            paramsKeys.forEach(function(key) {
                stringWhere = stringWhere + key + " = " + params[key];                
            })
        } 
        
        stringWhere = "WHERE " + stringWhere

        var stringQuery = `SELECT * FROM CIRCUITS ${stringWhere};`
        console.log(stringQuery);

        var res = await sqlite.run(stringQuery)

        if (!res[0]) 
            return "Erro! Nenhum circuito encontrado.";

        return res;
    },

    async findById(id) {
        var res = await sqlite.run(`SELECT * FROM CIRCUITS WHERE ID = ${id}`)
        
        if (!res[0])
            return "Erro! Circuito não localizado";

        return res;
    },
};

module.exports = Circuit;
