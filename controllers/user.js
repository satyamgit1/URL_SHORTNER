const {v4: uuidv4} = require('uuid');
const User = require('../models/user');
const {setUser} = require('../service/auth');




async function handleUserSignup(req,res){
    const {name , email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/");
}



async function handleUserLogin(req,res){
    const {email, password} = req.body;
  const user  = await User.findOne({email, password});   // find kro email aur password jaha yeh email aur password ho
  // if user is not found 
  if(!user) return res.render('/login',{
    error: "Invalid username or password",
  });


  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie('uid', sessionId);
    return res.redirect("/"); // redirect to home page
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}