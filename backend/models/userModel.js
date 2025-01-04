const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique: true
    },
    password:{
        type:String,
    },
    isUserActivated:{
        type:Boolean,
        default: false
    },
    resetToken:{
        type:String,
        default:""
    }
});

userModel.pre('save',async (next)=>{
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, process.env.SALT| 7)
    next();
});

const userModel  = mongoose.model('user', userSchema);

module.exports = userModel;