const Product = require('../models/product')


// Get Pages Controllers
module.exports.getProductAddPage = (req,res,next) => {
    res.render('admin/product-add.ejs', {docTitle:'Admin | Add Product'})
}
module.exports.getProductEditPage = (req,res,next) => {
    const { prodId } = req.params
    Product.fetchById(prodId)
        .then(product => res.render('admin/product-edit.ejs', {docTitle:'Admin | Edit Product', product:product}))
        .catch(err => console.log(err))
}
module.exports.getProductListPage = (req,res,next) => {
    Product.fetchAll()    
        .then(products => res.render('admin/product-list.ejs', {docTitle:'Admin | List Products', products:products}))
        .catch(err => console.log(err))
}



// Create Product
module.exports.createProduct = (req,res,next) => {
    const { prod_name, prod_img, prod_desc, prod_price } = req.body
    const product = new Product(prod_name, prod_img, prod_desc, prod_price, req.user._id)
    product.save()
        .then(() => res.redirect('/admin/product-list'))
        .catch(err => console.log(err))
}


// Edit Product
module.exports.editProduct = (req,res,next) => {
    const { prodId } = req.params
    const { prod_name, prod_img, prod_desc, prod_price } = req.body
    const product = new Product(prod_name, prod_img, prod_desc, prod_price, req.user._id, prodId)
    product.save()
        .then(() => res.redirect('/admin/product-list'))
        .catch(err => console.log(err))
}


// Delete Product
module.exports.deleteProduct = (req,res,next) => {
    const { prodId } = req.params
    Product.deleteById(prodId)
        .then(() => res.redirect('/admin/product-list'))
        .catch(err => console.log(err))
}