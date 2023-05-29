import Auth from '../models/Auth.js'

async function accountExistsSignIn(req, res, next){
    const auth = await Auth.findOne({email: req.body.email})
    
    if(auth){
        req.user = {
            id: auth.id,
            email: auth.email,
            photo: auth.photo,
            password: auth.password,
            role: auth.role,
            is_verified: auth.is_verified
        }
        return next()
    }
    return res.status(401).json({message: 'auth does not exist!'})
}

export default accountExistsSignIn