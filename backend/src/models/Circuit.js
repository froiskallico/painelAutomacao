const sqlite = require('sqlite-sync');
const path = require('path');
const gpio = require('onoff').Gpio;

const database = path.resolve(__dirname, '..', '..', 'database', 'database.db');

sqlite.connect(database);

var Circuit = {
    ID: '',
    NAME: '',
    DESCRIPTION: '',     
    TYPE: '',
    FATHER: '',
    GPIO: '',
    STATE: '',
    DEFAULTSTATE: '',

    create(params) {
        var keys = Object.keys(params);

        keys.forEach((key) => {
            this[key] = params[key];
        });
    },

    async find(params) {    
        var paramsKeys = Object.keys(params);

        var stringWhere = '';

        if(paramsKeys.length > 0) {
            paramsKeys.forEach(function(key) {
                stringWhere = stringWhere + key + " = " + params[key] + " AND ";                
            })

            stringWhere = "WHERE " + stringWhere.slice(0, -5);
        }

        var stringQuery = `SELECT * FROM CIRCUITS ${stringWhere} ORDER BY NAME;`;

        var res = await sqlite.run(stringQuery)

        if (!res[0]) 
            return "Erro! Nenhum circuito encontrado.";      

        return res;
    },

    async toggle() {
        var newState = this.STATE == 1 ? 0 : 1;

        await sqlite.run(`UPDATE OR ROLLBACK CIRCUITS SET STATE = ${newState} WHERE ID = ${this.ID}`);
              
        var storedState = await sqlite.run(`SELECT STATE FROM CIRCUITS WHERE ID = ${Circuit.ID}`)[0].STATE;

        var output = new gpio(this.GPIO, 'out');
        output.writeSync(storedState);

        return storedState;        
    }, 

    async loadAll() {
        const circuits = await sqlite.run(`SELECT ID, STATE FROM CIRCUITS`);

        circuits.forEach(async(circuit) => {
            var output = new gpio(circuit.GPIO, 'out');
            output.writeSync(circuit.STATE);            
        });
    },

    async turnAllOff() {
        
        const circuits = await sqlite.run('SELECT ID FROM CIRCUITS');

        circuits.forEach(async(circuit) => {
            console.log(circuit);
            await sqlite.run(`UPDATE OR ROLLBACK CIRCUITS SET STATE = 0 WHERE ID = ${circuit}`);

            var output = new gpio(this.GPIO, 'out');
            output.writeSync(storedState);

            return storedState;    
        });        
    },

};

module.exports = Circuit;
