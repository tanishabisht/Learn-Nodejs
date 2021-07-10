const { getDb } = require('../utils/database')
const mongodb = require('mongodb')


module.exports = class User {

    constructor(name, email, cart, id){
        this.name = name
        this.email = email
        this.cart = cart // [{productId,quantity}, {productId,quantity}]
        this._id = new mongodb.ObjectID(id)
    }

    save(){
        const db = getDb()
        return db.collection('users').insertOne(this)
    }


    addToCart(prod) {
        const db = getDb()

        const cartProdIdx = this.cart.findIndex(p => p.productId.toString()===prod._id.toString())
        const updatedCart = [...this.cart]

        if(cartProdIdx>=0) updatedCart[cartProdIdx].quantity = this.cart[cartProdIdx].quantity + 1
        else updatedCart.push({productId: new mongodb.ObjectID(prod._id), quantity:1})

        return db.collection('users').updateOne({_id: this._id}, {$set: {cart:updatedCart}})
    }


    getCart() {
        const db = getDb()
        const prodIds = this.cart.map(i => i.productId)
        return db.collection('products').find({_id: {$in:prodIds}}).toArray()
            .then(products => products.map(p => {
                return {...p, quantity:this.cart.find(i => i.productId.toString() === p._id.toString()).quantity}
            }))
    }


    deleteItemFromCart(id) {
        const updatedCart = this.cart.filter(p => p.productId.toString() !== id.toString())
        console.log(updatedCart)
        const db = getDb()
        return db.collection('users').updateOne({_id: this._id}, {$set: {cart:updatedCart}})
    }


    static fetchById(id) {
        const db = getDb()
        return db.collection('users').find({_id: new mongodb.ObjectID(id)}).next()
    }

}