import { Router } from "express"
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js'
import getMangas from "../controllers/mangas/get_mangas.js"
import passport from "passport"

let router = Router()


router.get('/', read)
router.get('/comics', getMangas)
router.post('/', create)
// router.post('/mangas',create)

export default router



