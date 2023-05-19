import Manga from "../../models/Manga.js"

let getMe = async(req,res,next) => {
  try {
      let all = await Manga.find({ author_id: req.params.author_id })
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