const Product = require('../models/product')


// Get Pages Controllers
module.exports.getCartPage = (req,res,next) => {
    res.render('user/cart', {docTitle:'User | Cart'})
}
module.exports.getCheckoutPage = (req,res,next) => {
    res.render('user/checkout', {docTitle:'User | Checkout'})
}
module.exports.getOrdersPage = (req,res,next) => {
    res.render('user/orders', {docTitle:'User | Orders'})
}
module.exports.getProductDetailPage = (req,res,next) => {
    const { prodId } = req.params
    res.render('user/product-detail', {docTitle:'User | Product detail', product:Product.fetchById(prodId)})
}
module.exports.getProductListPage = (req,res,next) => {
    res.render('user/product-list', {docTitle:'User | Products list', products:Product.fetchAll()})
}