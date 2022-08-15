const {Router} = require('express');
const userRouter = Router();
const {createUser, login, updateUser, deleteUser, getAllUsers, loginUser} = require('./controllers');
const {hashPass, comparePass, tknCheck, emailCheck, newHashPass} = require('../middleware');

userRouter.post('/user', hashPass,  createUser);
userRouter.post('/login', loginUser);
userRouter.get('/user', getAllUsers);
userRouter.patch('/user',emailCheck, comparePass, newHashPass, updateUser);
userRouter.delete('/user', deleteUser);
userRouter.get('/login', tknCheck, login);

module.exports = userRouter;

