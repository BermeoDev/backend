exports.getUserProfile = async (req, res, next) => {
    try {
        const {userId} = req.user;
        const user = await user.findById(userId);
        if(!user){
            return res.status(400).json({message:'Usuario no encontrado'});
        }
        res.json({id: user.id, username: user.username, email: user.email});
    } catch (error) {
        next(error);
    }
};

exports.updateUserProfile = async (req, res, next) => {
    try {
        const {userId} = req.user;
        const {username, email} = req.body;
        await user.update(userId, {username, email});
        res.json({message: 'Perfil actualizado exitosamente'});
    } catch (error) {
        next (error);
    }
};

