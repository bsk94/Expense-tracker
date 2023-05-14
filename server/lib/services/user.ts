import { Request, Response } from 'express';
import { User, UserModel } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface Tokens {
  token?: string;
  refreshToken?: string;
}

export const register = async (req: Request) => {
  const { name, email, password, confirmPassword } = req.body;

  const newUser = new UserModel({
    name: name,
    email: email,
    password: password,
  });

  const userCreated = await newUser.save();
  return userCreated;
};

export const login = async (req: Request) => {
  const { password, email } = req.body;

  if (!email || !password) {
    throw new Error('Please provide email and password');
  }

  const user =
    (await UserModel.findOne({ email }).select('+password')) || new UserModel();

  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    throw new Error('Please provide email and password');
  }

  const token = jwt.sign({ id: user?._id }, process.env.SECRET as string, {
    expiresIn: '20min',
  });

  const refreshToken = jwt.sign(
    { id: user?._id },
    process.env.REFRESH_SECRET as string,
    {
      expiresIn: '180min',
    }
  );
  console.log('hhh', refreshToken);

  return { token, refreshToken } as Tokens;
};

export const refreshToken = async (req: Request) => {
  const refreshToken = req.body.refreshToken;

  const { id, exp } = (jwt.decode(refreshToken) as Payload) || {};
  console.log(id);
  console.log(exp);

  const dateNow = new Date();
  if (exp > dateNow.getTime() / 1000) {
    const token = jwt.sign({ id: id }, process.env.SECRET as string, {
      expiresIn: '1min',
    });
    console.log('ccc', token);
    return token;
  } else {
    throw new Error('refresh Token is expired');
  }
};

interface Payload {
  id: string;
  exp: number;
}

export const auth = async (token: string): Promise<User | null> => {
  const { id, exp } = (jwt.decode(token) as Payload) || {};

  if (id) {
    const dateNow = new Date();
    if (exp < dateNow.getTime() / 1000) {
      return null;
    }

    const user = await UserModel.findOne({ _id: id });

    if (user?._id) {
      return user as unknown as User;
    }
  }
  return null;
};
