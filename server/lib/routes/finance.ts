import createRouter from 'express-promise-router';
import { financeController } from '../controllers';
const router = createRouter();

router.post('/finance', financeController.addFinance);
router.get('/finance', financeController.getFinance);
router.delete('/finance/:id', financeController.deleteFinance);

export default router;
