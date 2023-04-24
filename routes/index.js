import express from 'express'
import userRouter from './users.js'
import authorRouter from './authors.js'
import categoriesRoutes from './categories.js'
import chapterRouter from './chapters.js'
import companiesRouter from './companies.js'
import mangasRouter from './mangas.js'
const router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'MINGA API',
    subtitle: 'endpoints of minga'
});
});

router.use('/users', userRouter)
router.use('/authors', authorRouter)
router.use('/categories', categoriesRoutes)
router.use('/chapters', chapterRouter)
router.use('/companies', companiesRouter)
router.use('/mangas', mangasRouter)

export default router;

