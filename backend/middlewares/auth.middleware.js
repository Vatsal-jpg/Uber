const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const captainModel = require('../models/captain.model');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async(req, res,next)=>{
   const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;
   if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }
    // Check if the token is blacklisted
    const isBlacklisted = await blacklistTokenModel.findOne({token: token}); 
    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next()
    } catch (error) {
        return res.status(401).json({message: 'Invalid token'});
    }
}

module.exports.authCaptain = async(req, res,next)=>{
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;
    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }
    // Check if the token is blacklisted
    const isBlacklisted = await blacklistTokenModel.findOne({token: token}); 
    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await userModel.findById(decoded._id);
        req.captain = captain;
        return next()
    } catch (error) {
        return res.status(401).json({message: 'Invalid token'});
    }
}