import Manga from "../../models/Manga.js"

let getMe = async(req,res,next) => {
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
      if(req.query.author_id){
        queries.author_id = '646776db2583924602efc5d5'
      }
      sort.title = req.query.order ?? 1
      pagination.limit = req.query.limit ?? 6
      pagination.page = req.query.page ?? 1
      console.log(queries)
      let all = await Manga
                  .find(queries)
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

export default getMe
// let getMe = async(req,res,next) => {
//   try {
//       let all = await Manga.find({ author_id: req.params.author_id })
//       return res.status(200).json({
//           success: true,
//           response: all
//       })
//   } catch (error) {
//       console.log(error)
//       next(error)
//   }
// }

// export default getMe