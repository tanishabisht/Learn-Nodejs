const { getDb } = require('../utils/database')
const mongodb = require('mongodb')


module.exports = class Product {
    constructor(name, img, desc, price, id){
        this.name = name
        this.img = img
        this.desc = desc
        this.price = price
        this._id = id ? new mongodb.ObjectID(id) : null
    }

    save(){
        const db = getDb()

        let dbOp
        if(this._id) dbOp = db.collection('products').updateOne({_id: this._id}, {$set:this})
        else dbOp = db.collection('products').insertOne(this)

        return dbOp
    
        // if(this.id){
        //     const prodIdx = products.findIndex(p => p.id==this.id)
        //     const updatedProd = [...products]
        //     updatedProd[prodIdx] = this
        //     products = updatedProd
        // } else {
        //     products.push({name:this.name, img:this.img, desc:this.desc, price:this.price, id:Math.random()})
        // }
    }

    static deleteById(id) {
        const db = getDb()
        return db.collection('products').deleteOne({ _id:new mongodb.ObjectID(id) })
        // products = products.filter(p => p.id!=id)
        // return products
    }

    static fetchAll() {
        const db = getDb()
        return db.collection('products').find().toArray()
        // return products
    }

    static fetchById(id) {
        const db = getDb()
        return db.collection('products').find({_id: new mongodb.ObjectID(id)}).next()
        // return products.find(p => p.id==id)
    }
}