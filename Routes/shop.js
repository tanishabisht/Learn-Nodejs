const express = require('express')

const adminData = require('./admin')


const router = express.Router()


// GET :: /shop
router.get('/', (req,res,next) => {
    console.log('shop.js :: ', adminData.products)
    res.render('shop', {docTitle:'Shop', products:adminData.products})
})


module.exports = router