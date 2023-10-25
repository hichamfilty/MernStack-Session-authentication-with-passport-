const passport = require("passport")
const LocalStategy = require('./localStrategy')
const User = require('../database/models/users')

//called on login, saves the id to session req.session.passport.user = {id:'..}
passport.serializeUser((user, done)=>{
  console.log('***serializedUser called, user: ');
  console.log(user); //the whole raw user object!
  console.log('-------');
  done(null, {_id: user._id})
})
//user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  console.log('deserializeUser called');
  User.findOne(
    { _id: id },
    'username',
    (err, user)=>{
      console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(err, user)
    }
  )
})
passport.use(LocalStategy)

module.exports = passport