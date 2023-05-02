import createHttpError from 'http-errors'
import User from '../../models/Auth.js'

let create = async(req, res, next) =>{
    try{
    let users = req.body
    users.role = 0
    users.is_online = true
    users.is_verified = true
    users.verify_code = "yes"    
    let one = new User(req.body)
    await one.save()
    return res.status(201).json({
       user: one.email,
       sucess: true 
    })
    
    } catch(error){
        next(error)
    }
}

export default create