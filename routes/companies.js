import {Router} from 'express'
import read from '../controllers/companies/admin.js'
import {companyCreate} from '../schemas/companies.js'
import validator from '../middlewares/validators.js'
import create from '../controllers/companies/create.js'
import passport from '../middlewares/passport.js';
import companyExist from '../middlewares/companyExists.js'


let router = Router()

router.get('/admin',passport.authenticate('jwt', {session: false}) ,read)
router.post('/', passport.authenticate('jwt', {session: false}) ,validator(companyCreate), companyExist ,create)

export default router 