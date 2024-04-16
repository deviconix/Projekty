const User = require('../models/UserModel');

module.exports = {
    index: async (req, res) => {
        console.log('index')
        try {
            const users = await User.find({}).lean({ virtuals: true });
            res.render("users", {
                title: "List USERS demo",
                users: users
            });
        } catch (err) {
            console.log('Err find Users:', err);
            res.status(500).send('Internal Server Error');
        }

    }
}