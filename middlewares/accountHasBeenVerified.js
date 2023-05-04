//la verificacion por ahora, va a ser true
async function accountHasBeenVerified(req, res, next){
    if(req.user.is_verified){
        return next()
    }
    return res.status(400).json({
        succes: false,
        message: 'The user has not verified'
    })
}

export default accountHasBeenVerified