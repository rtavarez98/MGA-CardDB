const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.get('/getAll', cardController.getAllCard);
router.get('/getId', cardController.getById);
router.get('/getType', cardController.getByType);

module.exports = router;