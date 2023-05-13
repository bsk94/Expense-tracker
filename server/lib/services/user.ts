import mongoose from 'mongoose';
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

  return { token } as Tokens;
};

export const refreshToken = async (req: Request) => {};

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
