const Router = require('express').Router();
const { registerUser } = require('../controller/auth.contoller');

Router.post('/register', registerUser);

module.exports = Router;