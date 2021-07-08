const express = require('express')
const path = require('path')

const rootDir = require('../Util/path')


const router = express.Router()


// GET :: /shop
router.get('/', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'Views', 'shop.html'))
})


module.exports = router