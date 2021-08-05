const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AsanaSchema = new Schema({
    name: {
        type: String
    },
    goal1: {
        type: Boolean
    },
    goal2: {
        type: Boolean
    },
    goal3: {
        type: Boolean
    },
    goal4: {
        type: Boolean
    },
    goal5: {
        type: Boolean
    }
},
{  timestamps: true }
)

const AsanaModel = mongoose.model('AsanaModel', AsanaSchema)
module.exports = AsanaModel