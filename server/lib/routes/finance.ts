import createRouter from 'express-promise-router';
import { financeController } from '../controllers';
const router = createRouter();

router.post('/finance', financeController.addFinance);

export default router;
