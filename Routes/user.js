const express = require('express')

const userController = require('../controllers/user')


const router = express.Router()



// get pages routers

// GET :: /user/cart
router.get('/cart', userController.getCartPage)
// GET :: /user/checkout
router.get('/checkout', userController.getCheckoutPage)
// GET :: /user/orders
router.get('/orders', userController.getOrdersPage)
// GET :: /user/product-detail
router.get('/product-detail/:prodId', userController.getProductDetailPage)
// GET :: /user/product-list
router.get('/product-list', userController.getProductListPage)




module.exports = router