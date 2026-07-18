const userModel = require('../model/auth.model');
const jsonwebtoken = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    const user= await userModel.create({
        username,
        email,
        password
    });

    const token = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({
        message: 'User registered successfully',
        user,
        token
    });
}

module.exports = {
    registerUser
}