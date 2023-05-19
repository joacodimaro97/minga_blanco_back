import Manga from '../../models/Manga.js'
let getMangas = async(req,res,next) => {
    try {
        let queries = {}
        let sort = {}
        let pagination = {
            limit: 6,
            page: 1
        }
        if(req.query.title){
            queries.title = new RegExp(req.query.title.trim(), 'i')
        }
        if(req.query.category_id){
            queries.category_id = req.query.category_id.split(',')
        }
        sort.title = req.query.order ?? 1
        pagination.limit = req.query.limit ?? 6
        pagination.page = req.query.page ?? 1
        console.log(queries)
        let all = await Manga
                    .find(queries).select("title cover_photo author_id")
                    .sort(sort)
                    .skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0)
                    .limit(pagination.limit > 0 ? pagination.limit : 0)
        return res.status(200).json({
            success: true,
            response: all
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default getMangas