const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')
const rootDir = require('./utils/path')



const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))


// Setting templating engine
app.set('view engine', 'ejs')
app.set('views', 'views')


// Middleware routers
app.use('/admin', adminData.router)
app.use('/shop', shopRouter)


// 404 Error
app.use((req,res,next) => {
    res.render('404', {docTitle:'404'})
})



app.listen(3000)