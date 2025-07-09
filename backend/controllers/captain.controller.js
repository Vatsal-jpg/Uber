const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const validationResult = require('express-validator').validationResult;

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    const captainExists = await captainModel.find({email});
    if (captainExists.length > 0) {
        return res.status(400).json({ message: 'Captain already exists' });
    }

    const hashedPassword = await captainModel.hashPassword(password);
    try {
        const captain = await captainService.createCaptain({
            firstname:fullname.firstname ,
            lastname: fullname.lastname,
            email,
            password:hashedPassword,
            colour: vehicle.color,
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
