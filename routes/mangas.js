import { Router } from "express"
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js'
import passport from "passport"

let router = Router()


router.post('/', create)
router.get('/', passport.authenticate('jwt',{session:false}), read)
// router.post('/comics',create)
// router.post('/mangas',create)

export default router



