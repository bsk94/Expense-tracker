import { Request, Response, NextFunction } from 'express';
import { userService } from '../services';

export const register = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const userCreated = await userService.register(req);

    return res.status(200).json({ success: true, userCreated });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { token } = await userService.login(req);

    return res.status(200).json({ success: true, body: { token } });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const refreshToken = async (req: Request, res: Response) => {};
