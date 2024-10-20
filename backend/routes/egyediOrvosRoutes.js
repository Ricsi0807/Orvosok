const express = require('express');
const { getEgyediOrvos, deleteEgyediOrvos } = require('../controllers/egyediOrvosRouteControllers'); 

const router = express.Router();
router.get('/:id', getEgyediOrvos);
router.delete('/:id', deleteEgyediOrvos);

module.exports = router;