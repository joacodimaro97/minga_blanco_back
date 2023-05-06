import {Router} from  'express'
import read from '../controllers/authors/read.js'
import create from '../controllers/authors/create.js'
import validator from '../middlewares/validators.js'
import authorExist from '../middlewares/authorExist.js'
import { authorCreate } from '../schemas/authors.js'
import passport from '../middlewares/passport.js'

let router = Router()

router.get('/', read)
router.post('/author-form',validator(authorCreate), passport.authenticate('jwt',{session:false}),authorExist,create)



export default router

