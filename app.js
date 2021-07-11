const express = require('express')
const bodyParser = require('body-parser')

// Controller
const { get404Page } = require('./controllers/error')

// Routes
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')

// Database
// const User = require('./models/user')
const mongoose = require('mongoose')



const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))


// Setting templating engine
app.set('view engine', 'ejs')
app.set('views', 'views')


// Store User
// app.use((req,res,next) => {
//     User.fetchById('60e9650b930af170db3ba287')
//         .then(user => {
//             req.user = new User(user.name, user.email, user.cart, user._id)
//             next()
//         })
//         .catch(err => console.log(err))
// })


// Middleware routers
app.use('/admin', adminRouter)
app.use('/user', userRouter)


// 404 Error
app.use(get404Page)


// Connect to database
mongoose.connect('mongodb+srv://tanisha:welcome1@nodejsmax.fgrzr.mongodb.net/shop', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(3000))
    .catch(err => console.log(err))