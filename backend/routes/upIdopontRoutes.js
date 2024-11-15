const express = require('express');
const { updateAppointment } = require('../controllers/upIdopontRouteControllers');

const router = express.Router();
router.post('/:id', updateAppointment);

module.exports = router;