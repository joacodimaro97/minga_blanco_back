import { Router } from "express"
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js'
import passport from "../middlewares/passport.js"
import { mangaCreate } from "../schemas/mangas.js"
import validator from "../middlewares/validators.js"
import mangasFromAuthor from "../controllers/mangas/get_mangas_from_autor.js"
import getOne from "../controllers/mangas/get_one.js"
import getMangas from '../controllers/mangas/get_mangas.js'
import getMe from '../controllers/mangas/get_me.js'
import update from '../controllers/mangas/update.js'
import destroy from "../controllers/mangas/destroy.js"


let router = Router()

router.get('/:id', passport.authenticate('jwt',{session:false}),  getOne)
router.get('/authors/:author_id', passport.authenticate('jwt',{session:false}) ,mangasFromAuthor)
router.post('/', passport.authenticate('jwt',{session:false}), validator(mangaCreate) , create)
router.get('/', getMangas)




router.get('/me/:author_id', getMe)
router.put('/:id', update)
router.delete('/:id', destroy)

router.post('/', passport.authenticate('jwt',{session:false}), validator(mangaCreate) , create)

export default router
