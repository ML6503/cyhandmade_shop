const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');

const OPTIONS = 'OPTIONS';

module.exports = (req, _res, next) => {
    if ( req.method === OPTIONS) {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];

        if(!token) {
            return next(ApiError.unauthorizedError());
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();

    } catch (e) {
        return next(ApiError.unauthorizedError());
    }
};
