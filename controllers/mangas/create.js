import Manga from '../../models/Manga.js'

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

export default create 