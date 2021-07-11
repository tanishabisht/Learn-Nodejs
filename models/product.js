const { Schema, model } = require('mongoose')


const productSchema = new Schema({
    name: String,
    price: Number,
    desc: String,
    img: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Product', productSchema)