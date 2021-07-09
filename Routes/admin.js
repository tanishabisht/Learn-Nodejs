const express = require('express')

const adminController = require('../controllers/admin')


const router = express.Router()




// get pages routers

// GET :: /admin/product-add
router.get('/product-add', adminController.getProductAddPage)
// GET :: /admin/product-edit/:prodId
router.get('/product-edit/:prodId', adminController.getProductEditPage)
// GET :: /admin/product-list
router.get('/product-list', adminController.getProductListPage)
// GET :: /admin/product-list/:prodId
router.get('/product-detail/:prodId', adminController.getProductDetailPage)




// POST :: /admin/product-add
router.post('/product-add', adminController.createProduct)
// POST :: /admin/product-edit/:prodId
router.post('/product-edit/:prodId', adminController.editProduct)
// POST :: /admin/product-delete/:prodId
router.post('/product-delete/:prodId', adminController.deleteProduct)

module.exports = router