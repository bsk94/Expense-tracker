import createRouter from 'express-promise-router';
import { balanceController } from '../controllers';
import { secureRoute } from '../services/auth';
const router = createRouter();

router.get('/', secureRoute, balanceController.getBalance);

export default router;
