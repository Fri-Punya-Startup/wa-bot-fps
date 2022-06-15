const express = require('express');
const router = express.Router();
const waController = require('../controllers/wa.controller');

router.get('/', (req,res) => {
    res.send("ok")
})
router.post('/acc', waController.accAcount);
router.post('/register/:phone', waController.register);
router.post('/notif', waController.notif);

module.exports = router;