var products = []

module.exports = class Product {
    constructor(name, img, desc, price, id){
        this.name = name
        this.img = img
        this.desc = desc
        this.price = price
        this.id = id
    }

    save(){
        if(this.id){
            const prodIdx = products.findIndex(p => p.id==this.id)
            const updatedProd = [...products]
            updatedProd[prodIdx] = this
            products = updatedProd
        } else {
            products.push({name:this.name, img:this.img, desc:this.desc, price:this.price, id:Math.random()})
        }
    }

    static deleteById(id) {
        products = products.filter(p => p.id!=id)
        return products
    }

    static fetchAll() {
        return products
    }

    static fetchById(id) {
        return products.find(p => p.id==id)
    }
}