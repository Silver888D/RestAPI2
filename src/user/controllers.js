const User = require("./model");

exports.createUser = async (req, res) => {
    try {const newUser = await User.create(req.body);
        console.log(newUser);
        res.send({ msg: "This came from createUser" });}
    catch (error) {console.log(error);}
    };

exports.login = async (req, res) => {
    try {res.send({user: req.user.username});}
    catch (error) {console.log(error); res.send({ err: error });}
    };

exports.updateUser = async (req, res) => {
    try {const updates = {
            username: req.body.new_username,
            email: req.body.new_email,
            password: req.body.new_password,};
            await User.updateOne({ username: req.body.username }, { $set: updates });
            console.log(updates);
            res.send({ msg: "This came from updateUser" });}
    catch (error) {console.log(error); res.send({ err: error });}
    };

exports.deleteUser = async (req, res) => {
    try {const deletes = await User.deleteOne({ username: req.body.username });
        console.log(deletes);
        res.send({ msg: "This came from deleteUser" });}
    catch (error) {console.log(error); res.send({ err: error });}
    };
