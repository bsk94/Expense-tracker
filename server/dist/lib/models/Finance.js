"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const financeSchema = new mongoose_1.default.Schema({
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
exports.FinanceModel = mongoose_1.default.model('Finance', financeSchema);
