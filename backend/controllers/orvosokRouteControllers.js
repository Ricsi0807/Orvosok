const path = require('node:path');
const Orvosok = require('../models/Doctor');

exports.getOrvosok = async (req, res) => {
    try {
        const orvosok = await Orvosok.find({});
        // console.log(doctors);
        res.status(200).json({ orvosok });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
