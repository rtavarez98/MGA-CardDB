const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.get('/getAll', cardController.getAllCard);
router.get('/getObId', cardController.getByObId);
router.get('/getType', cardController.getByType);

module.exports = router;