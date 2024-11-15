const path = require('node:path');
const Users = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        // console.log(doctors);
        res.status(200).render({ users });
    } catch (error) {
        res.status(500).render({ msg: error });
    }
};
