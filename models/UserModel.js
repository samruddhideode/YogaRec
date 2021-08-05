const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    Age: {
        type: Number
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    goal1: {
        type: Number
    },
    goal2: {
        type: Number
    },
    goal3: {
        type: Number
    },
    goal4: {
        type: Number
    },
    goal5: {
        type: Number
    },
    goal6: {
        type: Number
    }
},
{  timestamps: true }
)

const UserModel = mongoose.model('UserModel', UserSchema)
module.exports = UserModel