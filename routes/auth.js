import express from 'express'
import create from '../controllers/auth/create.js';
import read from '../controllers/auth/read.js';
import validator from '../middlewares/validators.js';
import userGetSing from '../schemas/auths.js'
import { Router } from 'express';


const router = Router();


router.get("/", read)


router.get('/admins',(req,res,next)=>res.status(200).json({
  succes: true,
  admins: []
}))


router.post('/signup', validator(userGetSing), create)


export default router;
