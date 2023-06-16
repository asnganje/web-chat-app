const router = require('express').Router();

router.get('/Home', (req, res) => {
    return res.send('Home screen')
})

router.use('/', require('./auth'))

module.exports = router