const Product = require('../models/product')


// Get Pages Controllers
module.exports.getCartPage = (req,res,next) => {
    req.user.getCart()
        .then(prods => res.render('user/cart', {docTitle:'User | Cart', cartProducts:prods}))
        .catch(err => console.log(err))
}
module.exports.getCheckoutPage = (req,res,next) => {
    res.render('user/checkout', {docTitle:'User | Checkout'})
}
module.exports.getOrdersPage = (req,res,next) => {
    res.render('user/orders', {docTitle:'User | Orders'})
}
module.exports.getProductDetailPage = (req,res,next) => {
    const { prodId } = req.params
    Product.findById(prodId)
        .then(product => res.render('user/product-detail', {docTitle:'User | Product detail', product:product}))
        .catch(err => console.log(err))    
}
module.exports.getProductListPage = (req,res,next) => {
    Product.find()
        .then(products => res.render('user/product-list', {docTitle:'User | Products list', products:products}))
        .catch(err => console.log(err))
}




// Add to Cart
module.exports.addProductToCart = (req,res,next) => {
    const { prodId } = req.params
    Product.fetchById(prodId)
        .then(prod => req.user.addToCart(prod))
        .then(() => res.redirect('/user/cart'))
        .catch(err => console.log(err))
}

// Delete from Cart
module.exports.deleteProductFromCart = (req,res,next) => {
    const { prodId } = req.params
    req.user.deleteItemFromCart(prodId)
        .then(() => res.redirect('/user/cart'))
        .catch(err => console.log(err))
}