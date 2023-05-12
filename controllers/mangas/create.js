import Manga from '../../models/Manga.js'

<<<<<<< HEAD
=======

>>>>>>> eff0fe3ddb3cd1b6e72893bd58de44d0277afd5f
let create = async(req,res,next) => { //create es el modelo 
    try {
        let one = await Manga.create(req.body)
        await one.save()
        return res.status(201).json({
            id: one._id,
            timestamps: one.createdAt
        })
    } catch (error) {
        next(error)
    }
}

<<<<<<< HEAD
export default create 
=======
export default create 


>>>>>>> eff0fe3ddb3cd1b6e72893bd58de44d0277afd5f
