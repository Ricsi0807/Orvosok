const path = require('node:path');
const Appointment = require('../models/Appointment');
exports.deleteAppointment = async (req, res) => {
    const {
        id
    } = req.params;
    console.log(req.params);
    try {
        await Appointment.findByIdAndDelete({_id:id});
        res.status(201).json({ msg: "Sikeres időpont törlés" });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
