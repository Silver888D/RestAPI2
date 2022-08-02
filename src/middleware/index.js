const bcrypt = require('bcryptjs');
const User = require('../user/model');

exports.hashPass = async(req,res, next)=>{
    try {
        // const pass = req.body.password;
        // const hashedPass = await bcrypt.hash(pass, 8);
        // req.body.password = hashedPass;
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.send({err: error});
    }
};

exports.comparePass= async(req, res, next)=>{
    try {
        req.user = await User.findOne({ username: req.body.username });
        userPass = await bcrypt.compare(req.body.password, req.user.password);
        if(userPass){next();}
        else if (!userPass){throw new Error({msg: 'Incorrect login details'});}
    } catch (error) {
        console.log(error);
        res.send({err: error});
    }
};