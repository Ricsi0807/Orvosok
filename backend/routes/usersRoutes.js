const express = require('express');
const { getUsers } = require('../controllers/usersRouteControllers');

const router = express.Router();
router.get('/', getUsers);

module.exports = router;