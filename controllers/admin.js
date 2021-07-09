const Product = require('../models/product')


// Get Pages Controllers
module.exports.getProductAddPage = (req,res,next) => {
    res.render('admin/product-add.ejs', {docTitle:'Admin | Add Product'})
}
module.exports.getProductEditPage = (req,res,next) => {
    res.render('admin/product-edit.ejs', {docTitle:'Admin | Edit Product'})
}
module.exports.getProductListPage = (req,res,next) => {
    res.render('admin/product-list.ejs', {docTitle:'Admin | List Products', products:Product.fetchAll()})
}


// CR** Products
module.exports.postProduct = (req,res,next) => {
    const product = new Product(req.body.prod_name)
    product.save()
    res.redirect('/admin/product-list')
}