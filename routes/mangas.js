import { Router } from "express"
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js'
<<<<<<< HEAD
import getMangas from "../controllers/mangas/get_mangas.js"
import passport from "../middlewares/passport.js"
=======
import passport from "passport"
import { mangaCreate } from "../schemas/mangas.js"
import validator from "../middlewares/validators.js"
import mangasFromAuthor from "../controllers/mangas/get_mangas_from_autor.js"
import getOne from "../controllers/mangas/get_one.js"

>>>>>>> dcc22af1e644d59cd930372664edfcdb1cf2d4da

let router = Router()

router.get('/:id', /* passport.authenticate('jwt',{session:false}) */ getOne)
router.get('/authors/:author_id', passport.authenticate('jwt',{session:false}) ,mangasFromAuthor)
router.post('/', passport.authenticate('jwt',{session:false}), validator(mangaCreate) , create)

<<<<<<< HEAD
// router.get('/', read)
router.get('/', passport.authenticate('jwt',{session:false}), getMangas)
router.post('/', create)
// router.post('/mangas',create)
=======
>>>>>>> dcc22af1e644d59cd930372664edfcdb1cf2d4da

export default router
