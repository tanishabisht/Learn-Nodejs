const express = require('express')

const adminController = require('../controllers/admin')


const router = express.Router()




// get pages routers

// GET :: /admin/product-add
router.get('/product-add', adminController.getProductAddPage)
// GET :: /admin/product-edit
router.get('/product-edit', adminController.getProductEditPage)
// GET :: /admin/product-list
router.get('/product-list', adminController.getProductListPage)




// POST :: /admin/product-add
router.post('/product-add', adminController.postProduct)


module.exports = router