import createRouter from 'express-promise-router';
import { financeController } from '../controllers';
import { secureRoute } from '../services/auth';
const router = createRouter();

router.post('/', secureRoute, financeController.addFinance);
router.get('/', secureRoute, financeController.getFinance);
router.get('/:id', secureRoute, financeController.getSingleFinance);
router.delete('/:id', secureRoute, financeController.deleteFinance);
router.patch('/:id', secureRoute, financeController.updateFinance);

export default router;
