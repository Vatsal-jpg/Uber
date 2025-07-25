const express= require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controllers')
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be more than 3 characters long'),
    body('password').isLength({min:6}).withMessage('passsword must be 6 characters long')
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('passsword must be 6 characters long')
],
    userController.loginUser
)

router.get('/profile',authMiddleware.authUser,userController.getUserProfile);
router.get('/logout',authMiddleware.authUser,userController.logoutUser);


module.exports= router