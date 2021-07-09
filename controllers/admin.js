const Product = require('../models/product')


// Get Pages Controllers
module.exports.getProductAddPage = (req,res,next) => {
    res.render('admin/product-add.ejs', {docTitle:'Admin | Add Product'})
}
module.exports.getProductEditPage = (req,res,next) => {
    const { prodId } = req.params
    res.render('admin/product-edit.ejs', {docTitle:'Admin | Edit Product', product:Product.fetchById(prodId)})
}
module.exports.getProductListPage = (req,res,next) => {
    res.render('admin/product-list.ejs', {docTitle:'Admin | List Products', products:Product.fetchAll()})
}
module.exports.getProductDetailPage = (req,res,next) => {
    const { prodId } = req.params
    res.render('admin/product-detail.ejs', {docTitle:'Admin | Detail Product', product:Product.fetchById(prodId)})
}



// Create Product
module.exports.createProduct = (req,res,next) => {
    const { prod_name, prod_img, prod_desc, prod_price } = req.body
    const product = new Product(prod_name, prod_img, prod_desc, prod_price)
    product.save()
    res.redirect('/admin/product-list')
}

// Edit Product
module.exports.editProduct = (req,res,next) => {
    const { prodId } = req.params
    const { prod_name, prod_img, prod_desc, prod_price } = req.body
    const product = new Product(prod_name, prod_img, prod_desc, prod_price, prodId)
    product.save()
    res.redirect('/admin/product-list')
}

// Delete Product
module.exports.deleteProduct = (req,res,next) => {
    const { prodId } = req.params
    Product.deleteById(prodId)
    res.redirect('/admin/product-list')
}