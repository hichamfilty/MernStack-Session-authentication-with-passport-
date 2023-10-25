const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const uri = 'mongodb://localhost:27017/simple-mern-passport'

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true}).then(() => console.log('mongodb database is connected'))
 .catch(err => console.log(err))

 const dbconnection =  mongoose.connection 

 module.exports = dbconnection