const path = require('node:path');
const Doctor = require('../models/Doctor');

exports.getOrvosok = async (req, res) => {
    try {
        const doctors = await Doctor.find({});
        // console.log(doctors);
        const viewsUt = path.resolve(__dirname, '..', 'views', 'doctors.ejs');
        res.status(200).render(viewsUt, { doctors });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
