const express = require('express')
const morgan = require('morgan')
const dbconnection = require('./database')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')

const app = express()
const PORT = 5000
const userRouter = require('./routes/user')

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
//session
app.use(session({
  secret: 'thisismysecret',
  store: new MongoStore({ mongooseConnection: dbconnection }),
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())//calls the seserialized user

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`express server is running: ${PORT}`);
})