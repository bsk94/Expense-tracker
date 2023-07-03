import { Request, Response, NextFunction } from 'express';
import { userService } from '../services';
import { error } from 'console';
// const catchAsync = (
//   fn: (req: Request, res: Response, next: NextFunction) => any
// ) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     fn(req, res, next).catch(next);
//   };
// };

// const asyncHandler =
//   (fn: any) => (req: Request, res: Response, next: NextFunction) =>
//     Promise.resolve(fn(req, res, next)).catch(next);

export const register = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const userCreated = await userService.register(req);

    return res.status(200).json({ success: true, userCreated });
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token, refreshToken } = await userService.login(req);

    return res
      .status(200)
      .json({ success: true, body: { token, refreshToken } });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  try {
    const token = await userService.refreshToken(req);
    console.log('aaa', token);
    return res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(500).json({ err });
  }
};
