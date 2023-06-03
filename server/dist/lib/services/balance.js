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
    var _a, _b;
    const result = yield Finance_1.FinanceModel.aggregate([
        {
            $group: {
                _id: '$financeType',
                total: {
                    $sum: '$amount',
                },
            },
        },
    ]);
    const revenue = ((_a = result.find((item) => item._id === 'revenue')) === null || _a === void 0 ? void 0 : _a.total) || 0;
    const expense = ((_b = result.find((item) => item._id === 'expense')) === null || _b === void 0 ? void 0 : _b.total) || 0;
    const totalBalance = revenue - expense;
    return totalBalance;
});
exports.getBalance = getBalance;
