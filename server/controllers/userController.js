const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');
const ApiError = require('../error/ApiError');

const generateJWT = (id, email, role) => jwt.sign(
    { id, email, role },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
);

class UserController {
    async registration(req, res, next) {
       try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return next(ApiError.badRequest('Validation error.', errors.array()))
        }
        const { email, password, role } = req.body;
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            return next(ApiError.badRequest('User with such email already exists.'));
        }

        const hashedPassword = await bcrypt.hash(password, +process.env.SALT);
        const user = await User.create({ email, role, password: hashedPassword });
        const basket = await Basket.create({ userId: user.id });
        const token = generateJWT(user.id, user.email, user.role); 
        return res.json({ token });

       } catch (e) {
           next(e);
       }
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        if(!email || !password) {
            return next(ApiError.badRequest('No user id or password'));
        }
        const user = await User.findOne({ where: { email }});
        if(!user) {
            return next(ApiError.internal('No such user exists.'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Password is incorrect. Try again.'));
        }
        const token = generateJWT(user.id, user.email, user.role);

        return res.json({ token });
    }

    async check(req, res, next) {
        const { id } = req.query;
        if(!id) {
            return next(ApiError.badRequest('No user id'));
        }
        
        res.json({ id });
    }
}

module.exports = new UserController();
