import createRouter from 'express-promise-router';
import { statisticsController } from '../controllers';
const router = createRouter();

router.get('/:financeType/:dates?', statisticsController.filterExpense);

export default router;
