const path = require('node:path');
const Patient = require('../models/Patient');

exports.getPatient = async (req, res) => {
    try {
        const paciensek = await Patient.find({});
        // console.log(doctors);
        res.status(200).json({ paciensek });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
