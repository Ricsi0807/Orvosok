const Appointment = require("../models/Appointment");

exports.getAppointmentCard = async (req, res) => 
    {
        const idopontok = await Appointment.find({});
        console.log(idopontok);
        
        try {
            // res.status(200).render("appointmentCard.ejs", {idopontok});
            res.status(200).render("appointmentCard.ejs");
        } catch (error) {
            res.status(500).json({msg: error.msg});
        }
    }