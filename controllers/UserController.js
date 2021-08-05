const User= require('../models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const path = require("path");
var jsonObj = require("../asanas.json");
var goalList = require("../goalJson.json");

//add new user to database
const signup = (req, res,next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPswd){
        if(err){
            res.render('error')
        }
        else{
            let user = new User({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                phone: req.body.phone,
                age: req.body.age,
                goal1: req.body.goal1,
                goal2: req.body.goal2,
                goal3: req.body.goal3,
                goal4: req.body.goal4,
                goal5: req.body.goal5,
                goal6: req.body.goal6
            })
            user.save()
            .then(response =>{
                res.render('index')
            })
            .catch(error => {
                res.json({
                    message: "Error"
                })
            }) 
        }
    })
    
}
//update records
const update = (req, res, next) => {
    let user_name = req.body.name
    let updatedData = {
        goal1: req.body.goal1,
        goal2: req.body.goal2,
        goal3: req.body.goal3,
        goal4: req.body.goal4,
        goal5: req.body.goal5,
        goal6: req.body.goal6
    }

    User.findOneAndUpdate({name: user_name},{$set:updatedData},{new: true}, function(err,user){

        if(err){
            res.render('error')
        }
        else{
            res.render('personalPage',{
                user,   //logged in user data
                asanas: jsonObj, //all asana details json files
                goalList,
                alert: 'Updated'
            })
        }
    })
}

//log into the portal
const login = (req, res,next) => {
    var username = req.body.username
    var password = req.body.password

    User.find({name: username}, function(err, user){
        if(err){
            res.render('error')
        }
        else{
            if(!user.length){
                res.render('error',{
                    error: 'not found'
                })
            }
            else{
                if(user[0].password == password){
                    res.render('personalPage',{
                        user: user[0],   //logged in user data
                        asanas: jsonObj, //all asana details json files
                        goalList
                    })
                }
                else{
                    let homePage = path.join(__dirname, "../views/index.html");
                    res.sendFile(homePage)
                }
            }
        }
    })
}


module.exports ={
    signup, login, update
}