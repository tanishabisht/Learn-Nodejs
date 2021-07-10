const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db

const mongoConnect = cb => {
    MongoClient.connect('mongodb+srv://tanisha:welcome1@nodejsmax.fgrzr.mongodb.net/user', { useUnifiedTopology:true })
    .then(res => {
        _db = res.db()
        cb()
    })
    .catch(err => {
        console.log(err)
        throw err
    })
}

const getDb = () => {
    if(_db) return _db
    throw 'No database found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb