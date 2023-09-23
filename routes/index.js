const express = require('express');
const router = express.Router();

router.use('/', (req, res)=> {
    res.send('Routes')
})
router.use('/contacts', require('./contacts'))

module.exports = router;