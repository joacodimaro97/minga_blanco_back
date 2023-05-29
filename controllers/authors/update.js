import Author from "../../models/Author.js"
import Auth from "../../models/Auth.js"

const update = async (req,res,next)=> {
    let role = req.body.active? 1 : 0
    try{
        let update = await Author.findByIdAndUpdate(
                req.params.id, //busca el author que llega por URL 
                req.body,  //datos a actualizar desde el front
                {new : true}
        )
        if (update?.active === req.body.active ){  //si son iguales, active del update coincide con el active que llega del front
            let userUpdate = await Auth.findByIdAndUpdate(
                update.user_id, {role}, 
                {new : true}
            ) //implementar como middleware
            return res.status(200).json({
                sucess :true,
                message: 'updated',
                update,
                userUpdate
            })
        } else {
            return res.status(404).json({
                sucess : false,
                message : 'Not found'
            })
        }
    } catch (error){
        next(error)
    }
}
export default update