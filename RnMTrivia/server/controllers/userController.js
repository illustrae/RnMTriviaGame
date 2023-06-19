const User = require('../models/userModel');
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    registerUser: async (req, res) => {
        try {
            //* check if the email already exists in DB
            const potentialUser = await User.findOne({ email: req.body.email })
            if (potentialUser) {
                res.status(400).json({ message: 'Email already exists, please login' })
            } else {

                //* create the user
                const newUser = await User.create(req.body);

                //* Generating a user token and storing the id and email of newly created user.
                const userToken = jwt.sign({ _id: newUser._id, email: newUser.email }, secret, { expiresIn: '2h' })
                console.log(userToken)

                //* sending user data back to the client
                res.status(201).cookie('userToken', userToken, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }).json(newUser);


            }
        }
        catch (err) {
            res.status(400).json({ error: err });

        }

    },

    //! Login user

    loginUser: async (req, res) => {
        try{
            //* check if user already exists
            const user = await User.findOne({email: req.body.email})
            if(user) {
                //*check to see if the password entered matches the password in the DB for the email specifically the hash
                const passwordsMatch = await bcrypt.compare(req.body.password, user.password)
                if(passwordsMatch){
                    //* generate our user token and log user in.
                    const userToken = jwt.sign({ _id: user._id, email: user.email }, secret, { expiresIn: '2h' })
                    //*log user in and set cookie
                    res.status(201).cookie('userToken', userToken, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }).json(user);
                } else {
                    //* this is if the email does exist but passwords do not match
                    res.status(400).json({message: 'Invalid email/password'})

                }

            } else {
                res.status(400).json({message: 'Invalid email/password'})
            }
        }
        catch(err) {
            res.status(400).json({ error: err });
        }
    },
    logout: (req,res) => {
        res.clearCookie('userToken').json({message:'You have Logged out'})
    }
}