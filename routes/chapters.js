import {Router} from 'express'
import get_chapters from '../controllers/chapters/get_chapters.js';
import read from '../controllers/chapters/read.js'
import create from '../controllers/chapters/create.js';
import validator from '../middlewares/validators.js'
import { createChapterSchema } from '../schemas/chapters.js';
import passport from '../middlewares/passport.js';



let router = Router()



router.get('/', get_chapters)
router.post('/',   create)


export default router  

// passport.authenticate("jwt",{session:false}),
/* validator(createChapterSchema) */