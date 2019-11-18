const User = require('../models/User');

module.exports = {
    async show(req, res) {

        let password = req.body.password;
        
        var user = await User.login(password);     

        res.send(user);        
    },
}