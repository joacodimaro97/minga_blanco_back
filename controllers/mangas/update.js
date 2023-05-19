import Manga from '../../models/Manga.js'

const update = async(req,res,next) => {
      try {
           let response =  await Manga.findOneAndUpdate(
                  {_id: req.params.id}, //Objeto con el que se va a buscar 
                  req.body, // Objeto con las modificaiones
                  {new:true})
            console.log(response);
            if(response){
              return res.status(200).json({
                success: true,
                message: 'Update',
                response
              })
            } else {
              return res.status(404).json({
                success: true,
                message: 'Not Found!'
              })
            }
      } catch (error) {
            console.log(error)
            next(error)
      }
}

export default update