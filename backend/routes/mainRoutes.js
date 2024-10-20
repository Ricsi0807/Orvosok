const express = require('express');
const { getMain } = require('../controllers/mainRouteControllers');

const router = express.Router();
router.get('/', getMain);

module.exports = router;