const express = require('express')
const path = require('path')

const rootDir = require('../Util/path')


const router = express.Router()


// GET :: /admin/
router.get('/', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'Views', 'addProduct.html'))
})

// POST :: /admin
router.post('/', (req,res,next) => {
    console.log(req.body)
    res.redirect('/shop')
})


module.exports = router