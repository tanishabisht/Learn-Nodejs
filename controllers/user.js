const Product = require('../models/product')
const Order = require('../models/order')


// Get Pages Controllers
module.exports.getCartPage = (req,res,next) => {
    req.user.populate('cart.items.productId').execPopulate()
        .then(prods => res.render('user/cart', {docTitle:'User | Cart', cartProducts:prods.cart.items}))
        .catch(err => console.log(err))
}
module.exports.getCheckoutPage = (req,res,next) => {
    res.render('user/checkout', {docTitle:'User | Checkout'})
}
module.exports.getOrdersPage = (req,res,next) => {
    Order.find({'user.userId':req.user._id})
        .then(orders => res.render('user/orders', {docTitle:'User | Orders', orders:orders}))
        .catch(err => console.log(err))
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
    Product.findById(prodId)
        .then(prod => req.user.addToCart(prod))
        .then(() => res.redirect('/user/cart'))
        .catch(err => console.log(err))
}

// Delete from Cart
module.exports.deleteProductFromCart = (req,res,next) => {
    const { prodId } = req.params
    req.user.removeFromCart(prodId)
        .then(() => res.redirect('/user/cart'))
        .catch(err => console.log(err))
}




// Add Order
module.exports.addOrder = (req,res,next) => {
    req.user.populate('cart.items.productId').execPopulate()
        .then(user => {
            const products = user.cart.items.map(i => ({quantity:i.quantity, product:{...i.productId._doc}}))
            const order = new Order({user: {name:req.user.name, userId:req.user}, products})
            return order.save()
        })
        .then(() => {
            return req.user.clearCart()
        })
        .then(() => {
            res.redirect('/user/orders')
        })
        .catch(err => console.log(err))
}