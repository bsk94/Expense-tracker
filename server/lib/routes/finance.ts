import createRouter from 'express-promise-router';
import { financeController } from '../controllers';
const router = createRouter();

router.post('/finance', financeController.addFinance);
router.get('/finance', financeController.getFinance);
router.get('/finance/:id', financeController.getSingleFinance);
router.delete('/finance/:id', financeController.deleteFinance);
router.patch('/finance/:id', financeController.updateFinance);

export default router;
