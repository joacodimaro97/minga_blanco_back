import Manga from '../../models/Manga.js'

let getOne = async(req, res, next)=>{
    
        try {
            let one = await Manga.findById(req.params.id).select('-company_id -__v -createdAt -updatedAt').populate('author_id', 'name last_name photo _id' ).populate('category_id', 'name _id')
            res.status(200).json({
                success: true,
                response: one
            })
        } catch (error) {
            next(error)
        }
    
}

export default getOne