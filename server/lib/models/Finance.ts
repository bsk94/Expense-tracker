import mongoose, { Types } from 'mongoose';

const financeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title'],
    minLength: [3, 'Minimum length of the title is 3 characters'],
    maxLength: [100, 'Maximum length of the title is 100 characters'],
  },
  currency: {
    type: String,
    required: [true, 'Please provide currency'],
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
  userId: {
    type: Types.ObjectId,
    required: [true],
  },
});

export const FinanceModel = mongoose.model('Finance', financeSchema);
