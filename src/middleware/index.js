const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator = require('email-validator');
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
        console.log('this is comparePass');
        req.user = await User.findOne({ username: req.body.username });
        userPass = await bcrypt.compare(req.body.password, req.user.password);
        if(userPass){next();}
        else if (!userPass){throw new Error({msg: 'Incorrect login details'});}
    } catch (error) {
        console.log(error);
        res.send({err: error});
    }
};

exports.tknCheck= async(req,res,next)=>{
    try {
        console.log('this is tknCheck');
        const tkn = req.header("Authorization");
        const decodetkn = await jwt.verify(tkn, process.env.SECRET);
        const user = await User.findById(decodetkn._id);
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({err:error});
    }
};

exports.emailCheck=async(req,res,next)=>{
    try {
        if(validator.validate(req.body.email)){next();}
        else if (!validator.validate(req.body.email)){throw new Error({msg: 'Incorrect login details'});}
    } catch (error) {
        console.log(error);
        res.status(500).send({err:error});
    }
};