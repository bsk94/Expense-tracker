"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const financeSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.Types.ObjectId,
        required: [true],
    },
});
exports.FinanceModel = mongoose_1.default.model('Finance', financeSchema);
