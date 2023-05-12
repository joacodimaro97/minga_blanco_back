<<<<<<< HEAD

=======
>>>>>>> eff0fe3ddb3cd1b6e72893bd58de44d0277afd5f
import { Router } from "express"
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js'
import passport from "passport"
<<<<<<< HEAD
import { mangaCreate } from "../schemas/mangas.js"
import validator from "../middlewares/validators.js"

=======
>>>>>>> eff0fe3ddb3cd1b6e72893bd58de44d0277afd5f

let router = Router()


<<<<<<< HEAD
router.get('/', read)
router.post('/', passport.authenticate('jwt',{session:false}), validator(mangaCreate) , create)


export default router
=======
router.post('/', create)
router.get('/', passport.authenticate('jwt',{session:false}), read)
// router.post('/comics',create)
// router.post('/mangas',create)

export default router

>>>>>>> eff0fe3ddb3cd1b6e72893bd58de44d0277afd5f
