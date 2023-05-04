import {Router} from  'express'
import read from '../controllers/authors/read.js'
import create from '../controllers/authors/create.js'
import validator from '../middlewares/validator.js'
import { authorCreate } from '../schemas/authors.js'

let router = Router()
//router.post('/',(req,res,next)=>res.status(200).send('autor creado'))
router.get('/', read)
router.post('/author-form',validator(authorCreate),create)
//router.put('/:id',(req,res,next)=>res.status(200).send('autores modificados'))
//router.delete('/:id',(req,res,next)=>res.status(200).send('autor eliminado'))


export default router

