import Auth from '../../models/Auth.js'
import  jwt  from 'jsonwebtoken'

let signin = async(req, res, next) => {
    try{
        await Auth.findOneAndUpdate(
            {email: req.body.email},
            {is_online: true}

        )
        const token = jwt.sign(
            {id: req.user._id},
            process.env.SECRET,
            {expiresIn: 60*60*24}
        )
        const user ={
        email: req.user.email,
        photo: req.user.photo,
        role: req.user.role,

}
console.log(user)
console.log(req.user)
        return res.status(200).json({
            succes: true,
            message: 'auth sign in',
            token,
            user
        })
    } catch (error){
        next(error)
    }
}


export default signin

//tiene un status 200 porque es una modificacion