import mongoose, { Types } from 'mongoose';

const financeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the name'],
    minLength: [3, 'Minimum length of the name is 3 characters'],
    maxLength: [100, 'Maximum length of the name is 100 characters'],
  },
  date: {
    type: String,
    required: [true, 'Please provide a date'],
  },
  amount: {
    type: Number,
    required: [true, 'Please enter the amount'],
    min: [1, 'Entered amount must be a positive number'],
  },
  financeType: {
    type: String,
    required: [true, 'Please provide the type of finance'],
    enum: ['expense', 'revenue'],
  },
  expenseCategory: {
    type: String,
    enum: ['Home', 'Entertainment', 'Other', 'Food', 'Transport'],
  },
});

export const FinanceModel = mongoose.model('Finance', financeSchema);
