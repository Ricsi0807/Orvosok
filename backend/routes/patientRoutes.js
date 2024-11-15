const express = require('express');
const { getPatient } = require('../controllers/patientRouteControllers');

const router = express.Router();
router.get('/', getPatient);

module.exports = router;