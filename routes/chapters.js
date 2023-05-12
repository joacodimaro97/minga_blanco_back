import {Router} from 'express'
import get_chapters from '../controllers/chapters/get_chapters.js';
import read from '../controllers/chapters/read.js'
import create from '../controllers/chapters/create.js';
import validator from '../middlewares/validators.js'
import add_front_photo from '../middlewares/add_front_photo.js';
import { createChapterSchema } from '../schemas/chapters.js';
import passport from '../middlewares/passport.js';
import getOne from '../controllers/chapters/get_one.js';



let router = Router()

<<<<<<< HEAD
router.post('/',passport.authenticate("jwt",{session:false}), validator(createChapterSchema), add_front_photo, create)
router.get('/', read)

export default router  
=======

router.post('/', validator(createChapterSchema) , create)
router.get('/:id', getOne)
router.get('/', read)





export default router  

>>>>>>> dcc22af1e644d59cd930372664edfcdb1cf2d4da
