import { Router } from 'express';
import TransactionController from '../controllers/transactionController';

const router = Router();

router.post('/buy/:stockId', TransactionController.buy);
router.post('/sell/:stockId', TransactionController.sell)

export default router;