const express = require('express');
const router = express.Router();
const webhookController = require('../controller/webhooks.controller')


router.post('/free', webhookController.createFreeSomaUser)

module.exports = router;
