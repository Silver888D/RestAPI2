const User = require("./model");

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log(newUser);
        res.send({ msg: "This came from createUser" });
    } catch (error) {console.log(error);}
};

exports.readUser = async (req, res) => {
    try {
        if (req.body.username) {
            userRead = await User.findOne({ username: req.body.username });
            console.log(userRead);
        } else if (req.body.email) {
            userRead = User.findOne({ username: req.body.email });
            console.log(userRead);
        }} catch (error) {console.log(error); res.send({ err: error });}
    };

exports.updateUser = async (req, res) => {
    try {
        const updates = {
            username: req.body.new_username,
            email: req.body.new_email,
            password: req.body.new_password,
        };
        await User.updateOne({ username: req.body.username }, { $set: updates });
        console.log(updates);
    } catch (error) {console.log(error); res.send({ err: error });}
};

exports.deleteUser = async (req, res) => {
    try {
        const deletes = await User.deleteOne({ username: req.body.username });
        console.log(deletes);
    } catch (error) {console.log(error); res.send({ err: error });}
};
