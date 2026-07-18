const Router = require('express').Router();
const { registerUser } = require('../controller/auth.contoller');

Router.post('/register', registerUser);
Router.get('/test', (req, res) => {
    console.log('cookie', req.cookies);
    res.json({
        message: 'Test route',
        cookies: req.cookies
    });
});

module.exports = Router;