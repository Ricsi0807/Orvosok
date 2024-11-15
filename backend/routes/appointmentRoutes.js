const express = require('express');
const { getAppointment } = require('../controllers/appointmentRouteControllers');

const router = express.Router();
router.get('/', getAppointment);

module.exports = router;