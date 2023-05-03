import express from 'express'
import signup from '../controllers/auth/signup.js';
import signin from '../controllers/auth/signin.js'
import read from '../controllers/auth/read.js';
import validator from '../middlewares/validators.js';
import { userGetSignIn } from '../schemas/auths.js';
import { userGetSignUp } from '../schemas/auths.js';
import { Router } from 'express';
import accountExistsSignUp from '../middlewares/accountExistSingUp.js';
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js'
import accountHasBeenVerified from '../middlewares/accountHasBeenVerified.js'; 
import passwordIsOk from '../middlewares/pwdIsOk.js';


const router = Router();


router.get("/", read)


router.get('/admins',(req,res,next)=>res.status(200).json({
  succes: true,
  admins: []
}))


router.post('/signup', validator(userGetSignUp), accountExistsSignUp, signup)
router.post('/signin',validator(userGetSignIn), accountExistsSignIn, accountHasBeenVerified, passwordIsOk ,signin)


export default router;
