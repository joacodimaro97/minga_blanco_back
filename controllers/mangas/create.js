import Manga from '../../models/Manga.js'

const createManga = {
    create : async (req, res) => { //create es el modelo
        try {

          let manga = await Manga.create(req.body);
          return res.status(201).json({
            success: true,
            message: "A new Manga could be created",

          });
        } catch (err) {
          console.log(err);
          return res.status(400).json({
            success: false,
            message: "Could not create a new Manga",
          });
        }
      } 
}
export default createManga