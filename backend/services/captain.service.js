const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname,lastname,email,password,colour,plate,capacity,vehicleType
}) => {
    
    if (!firstname || !email || !password || !colour || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password: hashedPassword,
        vehicle: {
            color: colour,
            plate,
            capacity,
            vehicleType
        }
    });
    return captain;
}