const path = require('node:path');
const Appointment = require('../models/Appointment');

exports.getAppointment = async (req, res) => {
    try {
        const appointments = await Appointment.find({});
        // console.log(doctors);
        const viewsUt = path.resolve(__dirname, '..', 'views', 'appointment.ejs');
        res.status(200).render(viewsUt, { appointments });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
