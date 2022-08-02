// const bcrypt = require('bcryptjs');

// exports.hashPass = async(req,res, next)=>{
//     try {
//         // const pass = req.body.password;
//         // const hashedPass = await bcrypt.hash(pass, 8);
//         // req.body.password = hashedPass;
//         req.body.password = await bcrypt.hash(req.body.password, 8);
//         next();
//     } catch (error) {
//         console.log(error);
//         res.send({err: error});
//     }
// };

// exports.comparePass= async(req, res, next)=>{
//     try {
//         bcrypt.compare(req.body.password)
//     } catch (error) {
//         console.log(error);
//         res.send({err: error});
//     }
// }