import createRouter from 'express-promise-router';
import financeRoutes from './finance';
import statisticsRoutes from './statistics';
import balanceRoutes from './balance';

const router = createRouter();

router.use('/finance', financeRoutes);
router.use('/statistics', statisticsRoutes);
router.use('/balance', balanceRoutes);

export default router;
