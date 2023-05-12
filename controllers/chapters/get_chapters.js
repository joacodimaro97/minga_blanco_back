import Chapter from '../../models/Chapter.js'


let get_chapters = async(req, res, next)=>{
    let chapters = {}
    let pagination = {
        limit: 4,
        page: 1
    }
if(req.query.manga_id){
    chapters.manga_id = req.query.manga_id
}
if(req.query.page){
    pagination.page = req.query.page
}
if(req.query.quantity){
    pagination.limit = req.query.quantity
}
    try {
        let one = await Chapter.find(chapters).select('-manga_id -_id -createdAt -updatedAt -__v')
        .sort({order:1})
        .skip(pagination.page > 0? (pagination.page - 1)*pagination.limit : 0 )
        .limit(pagination.limit > 0? pagination.limit : 0 )
        res.status(200).json({
            success: true,
            response: one
        })
        
    } catch (error) {
        next(error)
    }
}


export default get_chapters