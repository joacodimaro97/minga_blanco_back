import express from 'express'
import authRouter from './auth.js'
import authorRouter from './authors.js'
import categoriesRoutes from './categories.js'
import chapterRouter from './chapters.js'
import companiesRouter from './companies.js'
import mangasRouter from './mangas.js'
import resourceRouter from './resources.js'
import paymentsRouter from './payments.js'
import chatbotRouter from './chatbot.js'

const router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'MINGA API',
    subtitle: 'endpoints of minga'
});
});

router.use('/auth', authRouter)
router.use('/authors', authorRouter)
router.use('/categories', categoriesRoutes)
router.use('/chapters', chapterRouter)
router.use('/companies', companiesRouter)
router.use('/mangas', mangasRouter)
router.use('/resources', resourceRouter)
router.use('/payments', paymentsRouter)
router.use("/chatbot",chatbotRouter)

export default router;

