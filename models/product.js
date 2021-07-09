const products = []

module.exports = class Product {
    constructor(t){
        this.name = t
    }

    save(){
        products.push(this)
    }

    static fetchAll() {
        return products
    }
}