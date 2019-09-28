const express = require('express');
const router = express.Router();
const { list, show, create } = require('../controllers/pesLeftController');

router.get('/pesleft', list);
router.get('/pesleft/:name', show)
router.post('/pesleft', create);

module.exports = router;