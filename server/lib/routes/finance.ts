import createRouter from 'express-promise-router';
import { financeController } from '../controllers';
const router = createRouter();

router.get('/', financeController.addFinance);

export default router;
