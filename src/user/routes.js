const {Router} = require('express');
const userRouter = Router();
const {createUser, readUser, updateUser, deleteUser} = require('./controllers');
const {hashPass, comparePass} = require('../middleware');

userRouter.post('/user',hashPass,  createUser);
userRouter.post('/login',comparePass, readUser);
userRouter.patch('/user', updateUser);
userRouter.delete('/user', deleteUser);

module.exports = userRouter;

