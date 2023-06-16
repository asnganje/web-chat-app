const router = require('express').Router();
const {login, register} = require('../controllers/authController')
const { body } = require('express-validator')

router.post('/Login', login)

router.post('/Register', register)
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),
    body('gender').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({min: 4}),

module.exports = router