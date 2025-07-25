const userModel= require('../models/user.model')
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model')

module.exports.registerUser = async(req, res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {email, fullname, password} = req.body;
    const userExists = await userModel.findOne({email});
    if(userExists){ 
        return res.status(400).json({message: 'User already exists'})
    }
    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createuser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });
   
    const token = user.genrateAuthToken();
    res.status(201).json({token,user})

}

module.exports.loginUser = async(req, res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {email, password} = req.body;
    const user = await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message: 'Invalid email or password'})
    }
    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid){
        return res.status(401).json({message: 'Invalid email or password'})
    }
    const token = user.genrateAuthToken();
    res.cookie('token', token)
    res.status(200).json({token,user})
}

module.exports.getUserProfile = async(req, res,next)=>{
    res.status(200).json({user: req.user})
}

module.exports.logoutUser = async(req, res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'You are not logged in'})
    }
    // await userService.blacklistToken(token);
    res.clearCookie('token');
    res.status(200).json({message: 'You have been logged out successfully'})
}