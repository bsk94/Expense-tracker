import { Request, Response } from 'express';
import { User, UserModel } from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface Tokens {
  token: string;
  refreshToken: string;
}

export const register = async (req: Request) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    throw new Error('Please provide name, email and password');
  }

  const newUser = new UserModel({
    name: name,
    email: email,
    password: password,
  });

  // const findOneEmail = await newUser.findOne( email)
  // if (findOneEmail) {
  //   return next(AppError("This email already used"));
  // }

  const userCreated = await newUser.save();

  return userCreated;
};

export const login = async (req: Request) => {
  const { password, email } = req.body;

  if (!email || !password) {
    throw new Error('Please provide email and password');
  }

  const user = await UserModel.findOne({ email }).select('+password');

  if (!user) {
    throw new Error('User cannot be found in the database');
  }

  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    throw new Error('Please provide email and password');
  }

  const token = jwt.sign({ id: user?._id }, process.env.SECRET as string, {
    expiresIn: '10min',
  });

  const refreshToken = jwt.sign(
    { id: user?._id },
    process.env.REFRESH_SECRET as string,
    {
      expiresIn: '1h',
    }
  );

  return { token, refreshToken } as Tokens;
};

export const refreshToken = async (req: Request) => {
  const refreshToken = req.body.refreshToken;

  const { id, exp } = (jwt.decode(refreshToken) as Payload) || {};

  const dateNow = new Date();
  if (exp > dateNow.getTime() / 1000) {
    const token = jwt.sign({ id: id }, process.env.SECRET as string, {
      expiresIn: '1h',
    });

    return token;
  } else {
    throw new Error('Refresh Token is expired');
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
