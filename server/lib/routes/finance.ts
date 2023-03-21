import createRouter from 'express-promise-router';
import { financeController } from '../controllers';
const router = createRouter();

router.post('/', financeController.addFinance);
router.get('/', financeController.getFinance);
router.get('/:id', financeController.getSingleFinance);
router.delete('/:id', financeController.deleteFinance);
router.patch('/:id', financeController.updateFinance);

export default router;
