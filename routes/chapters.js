import {Router} from 'express'

import read from '../controllers/chapters/read.js'
import create from '../controllers/chapters/create.js';
import validator from '../middlewares/validators.js'
import { createChapterSchema } from '../schemas/chapters.js';
import passport from '../middlewares/passport.js';



let router = Router()

router.post('/',passport.authenticate("jwt",{session:false}), validator(createChapterSchema) , create)
router.get('/', read)


export default router  