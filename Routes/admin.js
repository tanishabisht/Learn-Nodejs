const express = require('express')
const path = require('path')

const rootDir = require('../utils/path')


const router = express.Router()


const products = []

// GET :: /admin/
router.get('/', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'))
})

// POST :: /admin
router.post('/', (req,res,next) => {
    products.push({name: req.body.prod_name})
    res.redirect('/shop')
})


module.exports.router = router
module.exports.products = products