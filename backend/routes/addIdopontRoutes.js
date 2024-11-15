const express = require('express');
const { postAppointment } = require('../controllers/addIdopontRouteControllers');

const router = express.Router();
router.post('/', postAppointment);

module.exports = router;