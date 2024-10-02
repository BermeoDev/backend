const {verifyToken} = require('../utils/jwtUtils');

function authMiddleware (req, res, next){
    const authHeader = req.header.authorization;
    if(!authHeader){
        return res.status(401).json({message: '******'})
    }

    const [bearer, token] = authHeader.split (' ');
    if(bearer !== 'Bearer' || !token){
        return res.status(401).json({message: 'Formato de token invalido'});
    }

    try{
        const decoded = verifyToken(token);
        req.user = {userId: decoded,userId};
        next();
    }catch(error){
        res.status(401).json({message: 'Token invalido'});
    }

}

module.exports = authMiddleware;

