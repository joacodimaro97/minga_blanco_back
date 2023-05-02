import createHttpError from 'http-errors'
import Auth from '../../models/Auth.js'
import crypto from 'crypto'
import bcryptjs from 'bcryptjs'

let create = async(req, res, next) =>{
    req.body.is_online = false
    req.body.role = 0
    req.body.is_verified = false
    req.body.verify_code = crypto.randomBytes(10).toString('hex')
    req.body.password = bcryptjs.hashSync(req.body.password, 10)
    try{
        await Auth.create(req.body)
        return res.status(201).json({message:'user created'})
    } catch(error){
        next(error)
    }
}

export default create