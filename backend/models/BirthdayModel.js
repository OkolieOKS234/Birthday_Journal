const mongoose = require("mongoose")
const Schema  = mongoose.Schema


const birthdaySchema = new Schema({

    title:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    relationship:{
        type:String,
        required:true
    },
    
    // to know when the data was added and last updated
       }, {timestamps:true})
       module.exports = mongoose.model("Birthdays",birthdaySchema)