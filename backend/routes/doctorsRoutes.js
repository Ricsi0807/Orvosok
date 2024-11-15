const express = require('express');
const { getOrvosok } = require('../controllers/doktorokRouteControllers');

const router = express.Router();
router.get('/', getOrvosok);

module.exports = router;