const Product = require('../models/product')


// Get Pages Controllers
module.exports.getProductAddPage = (req,res,next) => {
    res.render('admin/product-add.ejs', {docTitle:'Admin | Add Product'})
}
module.exports.getProductEditPage = (req,res,next) => {
    const { prodId } = req.params
    Product.findById(prodId)
        .then(product => res.render('admin/product-edit.ejs', {docTitle:'Admin | Edit Product', product:product}))
        .catch(err => console.log(err))
}
module.exports.getProductListPage = (req,res,next) => {
    Product.find()    
        .then(products => res.render('admin/product-list.ejs', {docTitle:'Admin | List Products', products:products}))
        .catch(err => console.log(err))
}



// Create Product
module.exports.createProduct = (req,res,next) => {
    const { name, img, desc, price } = req.body
    const product = new Product({name, img, desc, price, userId:req.user})
    product.save()
        .then(() => res.redirect('/admin/product-list'))
        .catch(err => console.log(err))
}


// Edit Product
module.exports.editProduct = (req,res,next) => {
    const { prodId } = req.params
    const { name, img, desc, price } = req.body
    Product.findById(prodId)
        .then(product => {
            console.log(product)
            product.name = name
            product.img = img
            product.desc = desc
            product.price = price
            return product.save()
        })
        .then(() => res.redirect('/admin/product-list'))
        .catch(err => console.log(err))
}


// Delete Product
module.exports.deleteProduct = (req,res,next) => {
    const { prodId } = req.params
    Product.findByIdAndRemove(prodId)
        .then(() => res.redirect('/admin/product-list'))
        .catch(err => console.log(err))
}