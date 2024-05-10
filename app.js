const express = require('express')
const bodyParser = require('body-parser')

// Controller
const { get404Page } = require('./controllers/error')

// Routes
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')

// Database
const User = require('./models/user')
const mongoose = require('mongoose')



const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))


// Setting templating engine
app.set('view engine', 'ejs')
app.set('views', 'views')


// Store User
app.use((req,res,next) => {
    User.findById('60ead9c6250b78596cb8b282')
        .then(user => {
            req.user = user
            next()
        })
        .catch(err => console.log(err))
})


// Middleware routers
app.use('/admin', adminRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter)


// 404 Error
app.use(get404Page)


// Connect to database
mongo_link = "mongodb+srv://tanisha:welcome1@cluster0.pxmdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongo_link, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => {
        // User.findOne()
        //     .then(user => {
        //         if(!user){
        //             const user = new User({name:'Tani', email:'tani@gmail.com', cart:{items:[]}})
        //             user.save()
        //         }
        //     })
        app.listen(3000)
    })
    .catch(err => console.log(err))