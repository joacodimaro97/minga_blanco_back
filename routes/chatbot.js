import { Router } from 'express';
import controller from '../controllers/chatbot/controller.js';
const router = Router();

router.get('/', (req, res, next) => {
    controller(req, res, next, req.app); // Pass `req.app` to the controller
});

export default router;