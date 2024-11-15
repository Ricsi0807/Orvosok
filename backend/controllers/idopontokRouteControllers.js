const path = require('node:path');
const Appointment = require('../models/Appointment');

exports.getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.find({});
        // console.log(doctors);
        res.status(200).json({ appointment });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
exports.postAppointment = async (req, res) => {
    const {
        patientName,
        doctorName,
        date
    } = req.body;
}
