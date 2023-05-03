import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { UserModel } from '../models/User';

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

export const login = async (req: Request) => {};

export const refreshToken = async (req: Request) => {};

export const auth = async (token: string) => {};
