const User = require("../models/user.js")

module.exports.renderSignUpForm = (req,res)=>{
    res.render("users/signup.ejs")
}

module.exports.signUp = async (req,res)=>{
    try{
        let {username,email,password} = req.body
        
 console.log(req.body)
 let newUser = User({
email:email,
username:username
 })
const registerUser = await User.register(newUser,password)
req.logIn(registerUser,(err)=>{
    if(err){
        next(err)
    }else{
       req.flash("success","welcome to wanderlust")
res.redirect("/listings")
    }
})
console.log(registerUser)


    }catch(e){
        req.flash("success",e.message)
        res.redirect("/signup")
    }
 
}


module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs")
}

module.exports.login = (req,res)=>{
req.flash("success","Welcome back to wanderlust")
let redirectUrl = res.locals.redirectUrl || "/listings"

res.redirect(redirectUrl)
}

module.exports.logOut = (req,res,next)=>{
    req.logOut((err)=>{
        if(err){
            next(err)
        }
        req.flash("success","you are logout!")
        res.redirect("/listings")
    })
}