const path = require('node:path');
const Appointment = require('../models/Appointment');

// exports.getAppointment = async (req, res) => {
//     try {
//         const appointment = await Appointment.find({});
//         // console.log(doctors);
//         res.status(200).json({ appointment });
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// };
exports.postAppointment = async (req, res) => {
    const {
        patientName,
        doctorName,
        date
    } = req.body;
    console.log(req.body);
    try {
        const newAppointment = new Appointment({
            patientName,
            doctorName,
            date
        });
        await newAppointment.save();
        res.status(201).json({ msg: "Sikeres időpont foglalás", appointment: newAppointment });

    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
