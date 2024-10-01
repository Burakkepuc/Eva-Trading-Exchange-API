import { Router } from 'express';
import StockController from '../controllers/stockController';
const router = Router();

router.get('/getAll', StockController.getAll);

export default router;
