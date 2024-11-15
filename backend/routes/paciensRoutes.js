const express = require('express');
const { getPatient } = require('../controllers/paciensekRouteControllers');

const router = express.Router();
router.get('/', getPatient);

module.exports = router;