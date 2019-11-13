const sqlite = require('sqlite-sync');

sqlite.connect('..\..\database\database.db');
sqlite.connect
const User = {
    name: '',

    login(password) {
        var username = sqlite.run(`SELECT USERNAME FROM users WHERE PASSWORD = ${password}`);
        this.name = username;

        return this.name;
    },

}

module.exports = User;
