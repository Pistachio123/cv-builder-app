// in this file we will parse/check the cookie with the cookie-parser package
import jwt from 'jsonwebtoken'; // we need to get the payload(userId) from the token with a verify method
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// it's gonna protect routes
const protect = asyncHandler(async (req, res, next,) => {
    let token;

    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.userId).select('-password');

            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, invalid token');
        }

    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

export { protect };