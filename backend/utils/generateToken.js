import jwt from 'jsonwebtoken';

// token is gonna take sign is gonna take in an object with the payload being userId
// and "the secret"(put into dotenv file), an object with options (i.e. expires in) 
const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    // create a cookie named jwt, and pass the data into the cookie (i.e the token) 
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000,
    }); 
};

export default generateToken;