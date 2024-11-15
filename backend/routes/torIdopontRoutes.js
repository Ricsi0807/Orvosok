const express = require('express');
const { deleteAppointment } = require('../controllers/torIdopontRouteControllers');

const router = express.Router();
router.delete('/:id', deleteAppointment);

module.exports = router;