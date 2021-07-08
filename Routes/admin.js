const express = require('express')



const router = express.Router()
const products = []


// GET :: /admin/
router.get('/', (req,res,next) => {
    res.render('addProduct', {docTitle:'Add Product'})
})

// POST :: /admin
router.post('/', (req,res,next) => {
    products.push({name: req.body.prod_name})
    res.redirect('/shop')
})


module.exports.router = router
module.exports.products = products