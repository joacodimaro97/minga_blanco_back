import Chapter from '../../models/Chapter.js' 
import { createChapterSchema } from '../../schemas/chapters.js';


let create = async(req,res,next) => {
  console.log(req.body)
    try {
      const chapter = new Chapter(req.body);
      await chapter.save();
      res.status(201).json(chapter);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
      next(err);
    }
  };

export default create
  //Si la validación falla, enviamos una respuesta de error 400 con el mensaje de error de Joi.