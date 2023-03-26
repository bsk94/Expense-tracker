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
exports.filterExpense = void 0;
const Finance_1 = require("../models/Finance");
const filterExpense = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    const typeOfFinance = req.params.financeType;
    const dates = req.params.dates;
    if (dates) {
        const datesFormatted = dates.split(',');
        const startDate = new Date(datesFormatted[0]).toISOString().slice(0, 10);
        const endDate = new Date(datesFormatted[1]).toISOString().slice(0, 10);
        query = {
            financeType: typeOfFinance,
            date: {
                $gte: startDate,
                $lte: endDate,
            },
        };
    }
    else {
        query = { financeType: typeOfFinance };
    }
    const result = yield Finance_1.FinanceModel.find(query);
    if (!result) {
        throw new Error('Error while removing expenses from database');
    }
    else {
        return result;
    }
});
exports.filterExpense = filterExpense;
