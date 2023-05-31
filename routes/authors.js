import {Router} from  'express'
import create from '../controllers/authors/create.js'
import validator from '../middlewares/validators.js'
import authorExist from '../middlewares/authorExist.js'
import { authorCreate } from '../schemas/authors.js'
import passport from '../middlewares/passport.js'
import getOne from '../controllers/authors/get_one.js'
import read from '../controllers/authors/admin.js'
import is_admin from '../middlewares/is_admin.js'


let router = Router()


router.get('/admin',passport.authenticate('jwt',{session:false}),is_admin, read)
router.get('/:id', passport.authenticate('jwt',{session:false}) ,getOne)
router.post('/author-form',passport.authenticate('jwt',{session:false}) , validator(authorCreate), authorExist ,  create)







export default router