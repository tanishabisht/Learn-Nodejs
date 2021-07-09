const Product = require('./product')

var cart = []
var totalPrice = 0

module.exports = class Cart {
    static addProduct(id, prodPrice){
        const existingProdIdx = cart.findIndex(p => p.id==id)
        const existingProd = cart[existingProdIdx]

        if(existingProd){
            const updatedProd = {...existingProd}
            updatedProd.qty += 1
            cart[existingProdIdx] = updatedProd
        } else {
            const updatedProd = {id, qty:1}
            cart.push(updatedProd)
        }
        totalPrice += +prodPrice
    }

    // static fetchCartProducts() {
    //     return { cart, totalPrice }
    // }

    static deleteById(id, prodPrice) {
        const existingProd = cart.find(p => p.id==id)
        const updatedProd = {...existingProd}
        totalPrice -= parseFloat(prodPrice).toFixed(2) * updatedProd.qty
        cart = cart.filter(p => p.id!=id)
    }

    static fetchAllCartProducts() {
        const arr = []
        cart.forEach(prod => {
            arr.push({...Product.fetchById(prod.id), qty:prod.qty})
        })
        return {cart:arr, totalPrice}
    }

    // static fetchById(id) {
    //     return products.find(p => p.id==id)
    // }
}