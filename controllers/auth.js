const User = require('../models/user')
const bcrypt = require('bcryptjs')


// Get Pages Controllers
module.exports.getLoginPage = (req,res,next) => {
    res.render('auth/login', {docTitle:'Auth | Login'})
}
module.exports.getSignupPage = (req,res,next) => {
    res.render('auth/signup', {docTitle:'User | Signup'})
}



// Add User
module.exports.addUser = (req,res,next) => {
    const { email, password, confirmPassword } = req.body
    User.findOne({email:email})
        .then(user => {
            if(user){
                return res.redirect('signup')
            }
            return bcrypt.hash(password, 12)
                .then(hashPass => {
                    const new_user = new User({email, password:hashPass, confirmPassword:hashPass, cart:{items:[]}})
                    new_user.save()
                })
                .then(() => res.redirect('login'))
        })
        .catch(err => console.log(err))
}


// Login User
module.exports.loginUser = (req,res,next) => {
    const { email, password } = req.body
    User.findOne({email:email})
        .then(user => {
            if(!user){
                console.log('user with given mail id DNE :: ', user)
                return res.redirect('login')
            }
            return bcrypt.compare(password, user.password)
                .then(didMatch => {
                    if(didMatch){
                        console.log('the password did match !!!')
                        return res.redirect('/user/product-list')
                        // req.session.isLoggedIn = true
                        // req.session.user = user
                        // req.session.save(err => {
                        //     console.log(err)
                        //     res.redirect('/user/product-list')
                        // })
                    }
                    console.log('the password did not match :: ', didMatch)
                    res.redirect('login')
                })
                .catch(err => {
                    console.log('additional errors :: ', err)
                    res.redirect('login')
                })
        })
        .catch(err => console.log(err))
}