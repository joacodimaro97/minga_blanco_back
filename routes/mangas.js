
import { Router } from "express"
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js'
import passport from "passport"
import { mangaCreate } from "../schemas/mangas.js"
import validator from "../middlewares/validators.js"


let router = Router()


router.get('/', read)
router.post('/', passport.authenticate('jwt',{session:false}), validator(mangaCreate) , create)


export default router