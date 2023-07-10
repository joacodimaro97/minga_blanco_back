import Auth from '../models/Auth.js'

async function accountExistsSignUp(req, res, next){
    const auth = await Auth.findOne({email: req.body.email})
    if(auth){
        return res.status(400).json({error:'auth already exist!'})
} return next()
}

export default accountExistsSignUp