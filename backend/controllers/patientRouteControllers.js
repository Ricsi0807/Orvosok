const path = require('node:path');
const Patient = require('../models/Patient');

exports.getPatient = async (req, res) => {
    try {
        const patients = await Patient.find({});
        // console.log(doctors);
        const viewsUt = path.resolve(__dirname, '..', 'views', 'patient.ejs');
        res.status(200).render(viewsUt, { patients });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
