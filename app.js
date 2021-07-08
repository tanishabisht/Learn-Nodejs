const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminRouter = require('./Routes/admin')
const shopRouter = require('./Routes/shop')
const rootDir = require('./Util/path')



const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))


// Middleware routers
app.use('/admin', adminRouter)
app.use('/shop', shopRouter)


// 404 Error
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, 'Views/404.html'))
})



app.listen(3000)