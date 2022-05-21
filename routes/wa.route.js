const express = require('express');
const router = express.Router();
const waController = require('../controllers/wa.controller');

router.post('/acc', waController.accAcount);
router.post('/register/:phone', waController.register);

module.exports = router;