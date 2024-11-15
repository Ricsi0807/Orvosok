const path = require('node:path');
const Appointment = require('../models/Appointment');
exports.updateAppointment = async (req, res) => {
    const {
        id
    } = req.params;
    console.log(req.params);
    const {
        patientName,
        doctorName,
        date
    } = req.body;
    console.log(req.body);
    try {
        await Appointment.findByIdAndUpdate({_id:id}, {patientName, doctorName, date}, {new: true});
        res.status(201).json({ msg: "Sikeres időpont szerkesztés" });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
