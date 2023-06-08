import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a username'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: [true, 'Please use unique email to create an account'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false,
  },
  confirmPassword: {
    type: String,
    validate: {
      validator: function (this: any, val: any) {
        return val === this.password;
      },
      message: 'Passwords do not match',
    },
    minlength: 6,
    select: false,
  },
});

UserSchema.pre('save', async function (next) {
  //check if password was modified/already hashed
  if (!this.isModified('password')) {
    next();
  }
  //hash the password before it's saved in database
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.comparePasswords = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

export interface User {
  _id: string;
  name: string;
  email: string;
}

export const UserModel = mongoose.model('User', UserSchema);
