const mongoose = require ('mongoose')

const validator = require ('validator')


const userSchema = new mongoose.Schema({
    firstname :{
        type : String ,
        required : true, 
    },
    lastname : {
        type : String ,
        required : true, 
    },
    age :{
        type : Number , 
        required : true,
    }, 

    education : {
        type : String ,
        required: true ,
    }
})

const User = new mongoose.model('User', userSchema);
 
module.exports= User ;