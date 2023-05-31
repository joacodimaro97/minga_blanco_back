import { trusted } from 'mongoose'
import Manga from '../../models/Manga.js'

const update = async(req,res,next) => {
      try {
           let update =  await Manga.findOneAndUpdate(
                  {_id: req.params.id}, //Objeto con el que se va a buscar 
                  req.body, // Objeto con las modificaiones
                  {new:true}
            )
            return res.status(200).json({
                  success: true,
                  message: 'Update',
                  update
            })
      } catch (error) {
            console.log(error)
            next(error)
      }
}

export default update