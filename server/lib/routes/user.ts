import createRouter from 'express-promise-router';
import { userController } from '../controllers';

const router = createRouter();

const { register, login, refreshToken } = userController;

router.post('/register', register);
router.post('/login', login);
router.post('/refreshToken', refreshToken);

export default router;
