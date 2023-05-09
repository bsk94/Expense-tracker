import { auth } from './user';

export const secureRoute = async (req: any, res: any, next: any) => {
  const user: any = await auth(req.headers['authorization']);
  if (user) {
    req.user = user;
    console.log('gggg', user);

    next();
  } else {
    return res.status(401).send('Auth failed');
  }
};
