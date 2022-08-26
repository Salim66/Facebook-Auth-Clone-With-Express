
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import createError from './errorController.js';
import jwt from 'jsonwebtoken';
import { SendEmail } from '../utility/SendEmail.js';
import Token from '../models/Token.js';
import { createToken } from '../utility/CreateToken.js';


/**
 * @access public
 * @route api/user 
 * @method GET
 */
export const getAllUser = async (req, res, next) => {
    
    try {
        
        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        next(error);
    }

} 

/**
 * @access public
 * @route api/user 
 * @method POST
0 */
export const createUser = async (req, res, next) => {

    // make hash password
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);

    try {
        
        const user = await User.create({ ...req.body, password: hash_pass });
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }

} 

/**
 * @access public 
 * @route api/user/id 
 * @method GET
 */
export const getSingleUser = async (req, res, next) => {

    try {
        
        let { id } = req.params;

        const user = await User.findById(id);

        if(!user){
            return next(createError(404, 'Single User Not Found!'));
        }

        if(user){
            res.status(200).json(user);
        }


    } catch (error) {
        next(error);
    }

}

/**
 * @access public 
 * @route api/user/id
 * @method PUT
 */
export const updateUser = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }

}

/**
 * @access public 
 * @route api/user/id 
 * @method DELETE 
 */
export const deleteUser = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }


}


// Login User

/**
 * @access public
 * @route api/user/login 
 * @method POST
0 */
export const userLogin = async (req, res, next) => {

    try {

        // check user is has or not by email
        const login_user = await User.findOne({ email: req.body.email });

        // User is not found by email
        if(!login_user){
            return next(createError(404, 'User not found!'));
        }

        // Check user password match or not
        const check_pass = await bcrypt.compare(req.body.password, login_user.password);

        // If Password Not Match
        if(!check_pass){
            return next(createError(404, 'Wrong Password'));
        }

        // Create a token
        const token = jwt.sign({ id: login_user._id, isAdmin: login_user.isAdmin }, process.env.JWT_SECRET);

        // login user info
        const { password, isAdmin, ...login_info } = login_user._doc;

        res.cookie("access_token", token).status(200).json({
            token: token,
            user: login_info
        });

        
    } catch (error) {
        next(error);
    }

} 


/**
 * @access public
 * @route api/user/register
 * @method POST
0 */
export const userRegister = async (req, res, next) => {

    // make hash password
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);

    try {
        
        const user = await User.create({ ...req.body, password: hash_pass });

        // create token
        const token = createToken({ id: user._id });

        // update token
        await Token.create({ userId: user._id, token: token });

        // Send Activation Link
        const verify_link = `http://localhost:3000/${token}`;

        SendEmail(user.email, 'Facebook Verification Link', verify_link);

        res.status(200).json(user);

    } catch (error) {
        next(error);
    }

} 


/**
 * @access public
 * @route api/user/me
 * @method GET  
 */
export const getLoggedInUser = async (req, res, next) => {

    try {
        
        //get token
        let bearer_token = req.headers.authorization;

        // if token is not exists
        if( !bearer_token ){
            next(createError(404, 'Token not found!'));
        }

        let token = '';
        if( bearer_token ){

            token = bearer_token.split(' ')[1];

            // check verify user
            const logged_in_user = jwt.verify(token, process.env.JWT_SECRET);

            // check user
            if( !logged_in_user ){
                next(createError(404, 'Invalid Token'));
            }

            // find successfull login user
            if( logged_in_user ){
                let user = await User.findById(logged_in_user.id);
                res.status(200).json(user);
            }

        }


    } catch (error) {
        next(error);
    }

}


/**
 * @access private
 * @routes /api/user/verify
 * @method POST
 */
export const userAccountVerify = async (req, res, next) => {

    try {
        
        const { token } = req.body;

        // verify token
        const { id } = jwt.verify(token, process.env.JWT_SECRET); 

        // check token
        const verify = await Token.findOne({ userId: id, token: token });

        // check verify
        if( !verify ){
            next(createError(404, 'Invalid verify url'));
        }

        if( verify ){
            await User.findByIdAndUpdate(id, {
                isVerified: true 
            })
            res.status(200).json({ message: 'User Account Verified Successfully' });
            verify.remove();
        }


    } catch (error) {
        next(error);
    }

}