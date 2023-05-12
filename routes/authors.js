import {Router} from  'express'
import read from '../controllers/authors/read.js'
import create from '../controllers/authors/create.js'
import validator from '../middlewares/validators.js'
import authorExist from '../middlewares/authorExist.js'
import { authorCreate } from '../schemas/authors.js'
import passport from '../middlewares/passport.js'
import getOne from '../controllers/authors/get_one.js'


let router = Router()

<<<<<<< HEAD
router.get('/', read)
router.post('/author-form',passport.authenticate('jwt',{session:false}),validator(authorCreate),create)
=======
router.get('/:id', passport.authenticate('jwt',{session:false}) ,getOne)
router.post('/author-form',validator(authorCreate), passport.authenticate('jwt',{session:false}),create)
>>>>>>> dcc22af1e644d59cd930372664edfcdb1cf2d4da



export default router