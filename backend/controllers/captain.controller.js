const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const validationResult = require('express-validator').validationResult;
const blacklistTokenModel = require('../models/blacklistToken.model');
// const captainModel = require('../models/captain.model');

module.exports.registerCaptain = async (req, res, next) => {
    

    const errors = validationResult(req);
    console.log('Validation Errors:', validationResult(req).array());

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;
    const captainExists = await captainModel.find({email});
    if (captainExists.length > 0) {
        return res.status(400).json({ message: 'Captain already exists' });
    }

    try {
        const captain = await captainService.createCaptain({
            firstname:fullname.firstname ,
            lastname: fullname.lastname,
            email,
            password,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });
        const token = captain.generateAuthToken();
        res.status(201).json({ token, captain });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');


    if (!captain) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await captain.comparePassword(password);
   

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'You are not logged in' });
    }
    await blacklistTokenModel.create({token});
    res.clearCookie('token');
    res.status(200).json({ message: 'You have been logged out successfully' });
}