const express = require('express');
const { getOrvosok } = require('../controllers/orvosokRouteControllers');

const router = express.Router();
router.get('/', getOrvosok);

module.exports = router;