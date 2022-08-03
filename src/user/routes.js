const {Router} = require('express');
const userRouter = Router();
const {createUser, login, updateUser, deleteUser, getAllUsers} = require('./controllers');
const {hashPass, comparePass, tknCheck, emailCheck} = require('../middleware');

userRouter.post('/user',emailCheck, hashPass,  createUser);
userRouter.post('/login',comparePass, login);
userRouter.get('/user', getAllUsers);
userRouter.patch('/user',emailCheck, hashPass, updateUser);
userRouter.delete('/user', deleteUser);
userRouter.get('/login', tknCheck, login);

module.exports = userRouter;

