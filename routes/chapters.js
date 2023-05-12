import {Router} from 'express'

import read from '../controllers/chapters/read.js'
import create from '../controllers/chapters/create.js';
import validator from '../middlewares/validators.js'
import { createChapterSchema } from '../schemas/chapters.js';
import passport from '../middlewares/passport.js';
import getOne from '../controllers/chapters/get_one.js';



let router = Router()

router.post('/', validator(createChapterSchema) , create)
router.get('/:id', getOne)
router.get('/', read)





export default router  

// passport.authenticate("jwt",{session:false}),