const { Schema, model } = require('mongoose')


const userSchema = new Schema({
    email: String,
    password:String,
    confirmPassword:String,
    cart: {items: [{productId:{type:Schema.Types.ObjectId, ref:'Product'}, quantity:Number}]}
})


userSchema.methods.addToCart = function(prod){
    const cartProdIdx = this.cart.items.findIndex(p => p.productId.toString()===prod._id.toString())
    const updatedCart = [...this.cart.items]

    if(cartProdIdx>=0) updatedCart[cartProdIdx].quantity = this.cart.items[cartProdIdx].quantity + 1
    else updatedCart.push({productId:prod._id, quantity:1})

    this.cart = {items:updatedCart}
    return this.save()
}


userSchema.methods.removeFromCart = function(id){
    const updatedCart = this.cart.items.filter(p => p._id.toString() != id.toString())
    this.cart.items = updatedCart
    return this.save()
}


userSchema.methods.clearCart = function(){
    this.cart = {items:[]}
    return this.save()
}


module.exports = model('User', userSchema)