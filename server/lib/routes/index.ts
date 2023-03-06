import createRouter from 'express-promise-router';
import financeRoutes from './finance';

const router = createRouter();

router.use('/finance', financeRoutes);

export default router;
