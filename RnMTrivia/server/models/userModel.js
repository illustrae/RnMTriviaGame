const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema({
    userName: {
        type:String,
        required:[true, 'UserName is required']
    },
    email: {
        type: String,
        required:[true, 'Email is required'],
        validate: [isEmail, 'Invalid Email']
    },
    password:{
        type: String,
        required:[true, 'Password is required'],
        minLength:[8, 'Password must be 8 characters']
    },
    score:{
        type: Number,
        default: 0
    }
}, {timestamps:true})

//* Middleware
UserSchema.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set(value => this.confirmPassword = value)

    //* previous to saving prior to putting anything in the database takes in two arguments. 
    //* next is a function and if the passwords do match(successful) then invoke the next function in line.(placing in db)
UserSchema.pre('validate', function(next){
    if( this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Passwords do not match')
    }
    next();
})

//* this should go after 
UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports = mongoose.model('User', UserSchema)