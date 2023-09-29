const express = require('express');
const router = express.Router();


router.use('/contacts', require('./contacts'));
router.use('/', (req, res)=> {
    res.send('Routes')
});

module.exports = router;