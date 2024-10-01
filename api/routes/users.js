import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.get('/getUserStocks', UserController.getUserStocks)
router.put('/updateBalance', UserController.updateBalance);

export default router;