const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    googleId:{type:String,require:true,unique:true},
    email:{type:String},
    name: {type: String},
    avatar: {type:String}
});

module.exports=mongoose.model('User',userSchema)