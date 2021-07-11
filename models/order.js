const { Schema, model } = require('mongoose')


const orderSchema = new Schema({
    products: [{product:Object, quantity:Number}],
    user: {
        name: String,
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
})


module.exports = model('Order', orderSchema)