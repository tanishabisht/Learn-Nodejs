const { getDb } = require('../utils/database')
const mongodb = require('mongodb')


module.exports = class Product {
    constructor(name, img, desc, price, userId, id){
        this.name = name
        this.img = img
        this.desc = desc
        this.price = price
        this.userId = userId
        this._id = id ? new mongodb.ObjectID(id) : null
    }

    save(){
        const db = getDb()

        let dbOp
        if(this._id) dbOp = db.collection('products').updateOne({_id: this._id}, {$set:this})
        else dbOp = db.collection('products').insertOne(this)

        return dbOp
    }

    static deleteById(id) {
        const db = getDb()
        return db.collection('products').deleteOne({ _id:new mongodb.ObjectID(id) })
    }

    static fetchAll() {
        const db = getDb()
        return db.collection('products').find().toArray()
    }

    static fetchById(id) {
        const db = getDb()
        return db.collection('products').find({_id: new mongodb.ObjectID(id)}).next()
    }
}