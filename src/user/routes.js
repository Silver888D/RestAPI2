const {Router} = require('express');
const userRouter = Router();
const {createUser, readUser, updateUser, deleteUser} = require('./controllers');
const {hashPass} = require('../middleware');

userRouter.post('/user',  createUser);
userRouter.get('/user', readUser);
userRouter.patch('/user', updateUser);
userRouter.delete('/user', deleteUser);

module.exports = userRouter;

// hashPass,