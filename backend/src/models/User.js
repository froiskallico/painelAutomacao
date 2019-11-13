const sqlite = require('sqlite-sync');
const path = require('path');

const database = path.resolve(__dirname, '..', '..', 'database', 'database.db');

sqlite.connect(database);
var User = {
    _id: '',
    _name: '',

    resetUser() {
        this._id = null;
        this._name = null;
    },

    async login(password) {
        var res = await sqlite.run(`SELECT ID, USERNAME FROM USERS WHERE PASSWORD = ${password}`)
        
        if (!res[0]) {
            return "Erro! Senha não é válida para nenhum usuário.";
        }
        
        return res[0];      
    },
};

module.exports = User;