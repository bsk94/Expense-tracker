import createRouter from 'express-promise-router';
import { statisticsController } from '../controllers';
import { secureRoute } from '../services/auth';
const router = createRouter();

router.get(
  '/:financeType/:dates?',
  secureRoute,
  statisticsController.filterExpense
);

export default router;
