exports.errorHandler = (err, req, res, next) => {
console.error(err.stack);

if(err.name === 'ValidationError'){
    return res.estatus(400).json({message: err.message});
}

if(err.name === 'UnauthorizedError'){
    return res.status(401).json({message: 'Token no valido'});
}


res.status(500).json({message: 'Ha ocurrido un problema'});

};

