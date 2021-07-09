const express = require('express')
const bodyParser = require('body-parser')

const { get404Page } = require('./controllers/error')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')



const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))


// Setting templating engine
app.set('view engine', 'ejs')
app.set('views', 'views')


// Middleware routers
app.use('/admin', adminRouter)
app.use('/user', userRouter)


// 404 Error
app.use(get404Page)



app.listen(3000)