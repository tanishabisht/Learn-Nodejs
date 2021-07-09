const Product = require('../models/product')
const Cart = require('../models/cart')


// Get Pages Controllers
module.exports.getCartPage = (req,res,next) => {    
    res.render('user/cart', {docTitle:'User | Cart', cartProducts:Cart.fetchAllCartProducts()})
    // res.render('user/cart', {docTitle:'User | Cart', cartProducts:Cart.fetchCartProducts()})
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




// Add to Cart
module.exports.addProductToCart = (req,res,next) => {
    const { prodId } = req.params
    const product = Product.fetchById(prodId)
    Cart.addProduct(prodId, product.price)
    res.redirect('/user/cart')
}

// Delete from Cart
module.exports.deleteProductFromCart = (req,res,next) => {
    const { prodId } = req.params
    const product = Product.fetchById(prodId)
    Cart.deleteById(prodId, product.price)
    res.redirect('/user/cart')
}