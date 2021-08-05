const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
router.get('/',function(req, res){
    res.sendFile(__dirname + "/views/index.html")
})
router.get("/signuppage", function(req, res){
    res.sendFile(__dirname + "/views/signuppage.html")
})
router.post("/signup", UserController.signup)
router.post("/login", UserController.login)
router.post("/update", UserController.update)
module.exports = router