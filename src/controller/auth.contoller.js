const userModel = require('../model/auth.model');
const jsonwebtoken = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const user= await userModel.create({
        username,
        email,
        password
    });

    const token = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SECRET);

    res.cookie('token', token)


    res.status(201).json({
        message: 'User registered successfully',
        user
    });
}

module.exports = {
    registerUser
}