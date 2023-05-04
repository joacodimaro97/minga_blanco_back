import Auth from '../../models/Auth.js'

let signin = async(req, res, next) => {
    try{
        await Auth.findOneAndUpdate(
            {email: req.body.email},
            {is_online: true}

        )
        return res.status(200).json({
            succes: true,
            message: 'auth sign in'
        })
    } catch (error){
        next(error)
    }
}


export default signin

//tiene un status 200 porque es una modificacion