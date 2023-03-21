"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const Finance_1 = require("../models/Finance");
const getBalance = () => __awaiter(void 0, void 0, void 0, function* () {
    const expense = yield Finance_1.FinanceModel.aggregate([
        { $match: { financeType: 'expense' } },
        {
            $group: {
                _id: '$financeType',
                total: {
                    $sum: '$amount',
                },
            },
        },
    ]);
    const revenue = yield Finance_1.FinanceModel.aggregate([
        { $match: { financeType: 'revenue' } },
        {
            $group: {
                _id: '$financeType',
                total: {
                    $sum: '$amount',
                },
            },
        },
    ]);
    const totalBalance = revenue[0].total - expense[0].total;
    if (!totalBalance) {
        throw Error('Error while fetching balance from database');
    }
    else {
        return totalBalance;
    }
});
exports.getBalance = getBalance;
