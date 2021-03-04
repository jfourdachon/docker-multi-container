const express = require('express');
const router = express.Router();
const webhookController = require('../controller/webhooks.controller')


router.post('/free-soma', webhookController.createFreeSomaUser)
router.post('/free-golden-rules', webhookController.createFreeGoldenRulesUser)

module.exports = router;
