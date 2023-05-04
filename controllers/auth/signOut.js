import Auth from '../../models/Auth.js'

const signOut = async(req, res, next) => {
    const {email} = req.user
    try{
        await Auth.findOneAndUpdate(
            {email},
            {is_online: false},
            {new: true}
        )
        return res.status(200).json({
            message: 'User offline'
        })
    } catch(error){
        next(error)
    }
}    

export default signOut