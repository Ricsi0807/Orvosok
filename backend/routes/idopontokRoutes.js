const express = require('express');
const { getAppointment } = require('../controllers/idopontokRouteControllers');

const router = express.Router();
router.get('/', getAppointment);

module.exports = router;