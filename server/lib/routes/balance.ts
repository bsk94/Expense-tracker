import createRouter from 'express-promise-router';
import { balanceController } from '../controllers';
const router = createRouter();

router.get('/', balanceController.getBalance);

export default router;
