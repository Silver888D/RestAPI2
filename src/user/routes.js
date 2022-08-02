const {Router} = require('express');
const userRouter = Router();
const {createUser, login, updateUser, deleteUser} = require('./controllers');
const {hashPass, comparePass} = require('../middleware');

userRouter.post('/user',hashPass,  createUser);
userRouter.post('/login',comparePass, login);
userRouter.patch('/user', updateUser);
userRouter.delete('/user', deleteUser);

module.exports = userRouter;

