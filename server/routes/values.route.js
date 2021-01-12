const express = require('express');
const router = express.Router();
const valuesController = require('../controllers/values.controller')


router.get('/all', valuesController.getAllValues);
router.get('/current', valuesController.getCurrentValue);

router.post('values', valuesController.postValue)

module.exports = router;
