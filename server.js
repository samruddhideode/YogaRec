const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const User = require('./models/UserModel')
const Asana = require('./models/AsanaModel')
const UserController = require('./controllers/UserController')
const YogaRoute = require('./routes/route')

mongoose.connect('mongodb://localhost:27017/user_db')
const db = mongoose.connection

db.on('error', (err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Mongo Connection established')
})

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

//---------------------------------------------------------
app.get("/", function(req, res){
    res.render('index')
})

app.get("/signuppage", function(req, res){
    res.render('signuppage')
})

app.post("/update", UserController.update)
app.post("/signup", UserController.signup)
app.post("/login", UserController.login)
//---------------------------------------------------------

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})

app.use('/static', express.static('public'));
app.use('/api/user/', YogaRoute)
