const jwt = require('jsonwebtoken');
const User = require("./model");

exports.createUser = async (req, res) => {
    try {const newUser = await User.create(req.body);
        const tkn = await jwt.sign({_id: newUser._id}, process.env.SECRET);
        res.send({ msg: "This came from createUser" ,newUser, tkn});}
    catch (error) {console.log(error);}
    };

    exports.loginUser = async (req, res) => {
        try {
            const users = await User.findOne({username: req.body.username});
            userPass = await bcrypt.compare(req.body.password, users.password);
            if(userPass){console.log(users); res.send({  users });}
            else if (!userPass){throw new Error({msg: 'Incorrect login details'});}
            
            }
        catch (error) {
            console.log(error);
            res.send({ err: error });}
        };

exports.login = async (req, res) => {
    try {
        const tkn = await jwt.sign({_id: req.user._id}, process.env.SECRET)
        res.send({user: req.user.username, email: req.user.email, tkn});}
    catch (error) {console.log(error); res.send({ err: error });}
    };

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        const result = users.map((u, index) => {
            return u.username;
        });
        console.log(result);
        res.send({  users: result });}
    catch (error) {
        console.log(error);
        res.send({ err: error });}
    };

exports.updateUser = async (req, res) => {
    console.log(req.body);
    console.log('userUpdate');
    try {const updates = await {
            username: req.body.new_username,
            email: req.body.new_email,
            password: req.body.new_password,};  
            userUpdate =await User.updateOne({ username: req.body.username }, { $set: updates });
            console.log(updates);
            res.send({ msg: "This came from updateUser", userUpdate, updates  });}
    catch (error) {console.log(error); res.send({ err: error });}
    };

exports.deleteUser = async (req, res) => {
    try {const deletes = await User.deleteOne({ username: req.body.username });
        console.log(deletes);
        res.send({ msg: "This came from deleteUser" });}
    catch (error) {console.log(error); res.send({ err: error });}
    };

