const bcrypt = require('bcrypt');
const User = require('../models/user');
const {generateToken} = require('../utils/jwtUtils');

exports.register = async(req, res, next) => {
    try {
        const {username, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        const userId = await User.create(username, email, hashedPassword);
        const token = generateToken(userId);
        res.status(201).json({message: 'Usuario registrado exitosamente! ', token});
    } catch (error) {
        next(error);
    }
};

exports.login = async(req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await user.findByEmail(email);
        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).json({message: 'Las credenciales no son validas'});
        }
        const token = generateToken(user.id);
        res.json({mesage: 'Ingreso Exitoso', token});
    } catch (error) {
        next(error);
    }
};


