const User = require('../models/User');

module.exports = {
    async show(req, res) {
        let password = req.body.password;

        let name = await User.login(password);

        if(!name) {
            console.log('User not found');
        }

        console.log(User.name);
    }
}