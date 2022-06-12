const express=require('express')
const router=express.Router()
const {body}=require('express-validator')
const controller=require('../controllers/index')

router.get('/init',controller.initDatabase)
router.get('/', controller.getSubscribers)
router.post('/subscribe', [
    body('email').isEmail().escape(),
    body('firstname').not().isEmpty().escape(),
    body('lastname').not().isEmpty().escape(),
], controller.addSubscriber)

router.get('/test', (req, res) => {
    res.send('hello')
})

module.exports =router
