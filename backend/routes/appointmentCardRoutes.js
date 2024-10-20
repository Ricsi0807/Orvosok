const express = require('express');
const {
    getAppointmentCard,
} = require('../controllers/appointmentCardRouteControllers');
const router = express.Router();
router.get('/', getAppointmentCard);
module.exports = router;
