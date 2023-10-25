const express = require('express')
const router = express.Router()

const User = require('../database/models/users')
const passport = require('../passport')

router.get('/', (req, res) => {
  res.send('<h1>hello users</h1>')
})

router.post('/register', (req, res) => {
  console.log('user signup');
  const { username, password } = req.body;
  User.findOne({ username: username }, (err, user) =>{
    if(err) {
      console.log(err);
    }else if(user){
      res.json({ error: `Sorry. a user ${username} already exist`})
    }else{
      const newUser = new User({
        username: username,
        password: password
      });
      newUser.save((err, savedUser) => {
        if(err) return res.json(err);
        res.json(savedUser);
      })
    }
  })
})
router.post('/login', (req, res, next) => {
  console.log(('routes/user.js, login, req.body: '));
  console.log(req.body);
  next()
},passport.authenticate('local'), (req, res) => {
  console.log('logged in', req.user);
  var userInfo = {
    username: req.user.username
  };
  res.send({userInfo, loggedIn: true})
})
router.get('/profile', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user , loggedIn: true})
  } else {
      res.json({ user: null, loggedIn: false })
  }
})
router.post('/logout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})


module.exports = router