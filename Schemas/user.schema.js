import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    user_name : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
    role : {type:String,required:true}
}, {timestamps : true})

export {userSchema}