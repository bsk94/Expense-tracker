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
exports.updateFinance = exports.getSingleFinance = exports.deleteFinance = exports.getFinance = exports.addFinance = void 0;
const Finance_1 = require("../models/Finance");
const addFinance = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const newFinance = new Finance_1.FinanceModel({
        name: req.body.name,
        date: req.body.date,
        amount: req.body.amount,
        financeType: req.body.financeType,
        expenseCategory: req.body.expenseCategory,
    });
    yield newFinance.save();
    return {};
});
exports.addFinance = addFinance;
const getFinance = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.p) || 1;
    const itemsPerPage = 4;
    const finance = yield Finance_1.FinanceModel.find()
        .skip((page - 1) * itemsPerPage)
        .limit(itemsPerPage);
    const total = yield Finance_1.FinanceModel.countDocuments();
    const pages = Math.ceil(total / itemsPerPage);
    if (!finance) {
        throw Error('Error while fetching expenses from database');
    }
    else {
        return { finance, total, pages };
    }
});
exports.getFinance = getFinance;
const deleteFinance = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Finance_1.FinanceModel.findByIdAndDelete(id);
    if (!result) {
        throw new Error('Error while removing expenses from database');
    }
    else {
        return result;
    }
});
exports.deleteFinance = deleteFinance;
const getSingleFinance = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const finance = yield Finance_1.FinanceModel.findById(id);
    if (!finance) {
        throw Error('Error while fetching expenses from database');
    }
    else {
        return finance;
    }
});
exports.getSingleFinance = getSingleFinance;
const updateFinance = (req) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        throw new Error('Data to update can not be empty!');
    }
    const id = req.body._id;
    const result = yield Finance_1.FinanceModel.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    if (!result) {
        throw new Error('Error while updating on database');
    }
    else {
        return result;
    }
});
exports.updateFinance = updateFinance;
