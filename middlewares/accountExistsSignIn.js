import Auth from '../models/Auth.js'

async function accountExistsSignIn(req, res, next){
    const auth = await Auth.findOne({email: req.body.email})
    console.log(auth._id)
    if(auth){
        req.user = {
            id: auth._id,
            email: auth.email,
            photo: auth.photo,
            password: auth.password,
            role: auth.role,
            is_verified: auth.is_verified
        }
        console.log(req.user)
        return next()
    }
    return res.status(401).json({message: 'auth does not exist!'})
}

export default accountExistsSignIn