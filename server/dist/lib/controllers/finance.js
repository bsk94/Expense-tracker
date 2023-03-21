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
const services_1 = require("../services");
const addFinance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const financeCreated = yield services_1.financeService.addFinance(req);
        return res.status(200).send({ data: financeCreated });
    }
    catch (err) {
        return res.status(500).send(`Internal server error, ${err.message}`);
    }
});
exports.addFinance = addFinance;
const getFinance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const finance = yield services_1.financeService.getFinance(req);
        return res.status(200).send(finance);
    }
    catch (err) {
        return res
            .status(500)
            .send('Internal server error, please contact support');
    }
});
exports.getFinance = getFinance;
const deleteFinance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const expenses = yield services_1.financeService.deleteFinance(id);
        return res.status(200).send('User was found');
    }
    catch (error) {
        return res
            .status(500)
            .send('Internal server error, please contact support');
    }
});
exports.deleteFinance = deleteFinance;
const getSingleFinance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const finance = yield services_1.financeService.getSingleFinance(id);
        return res.status(200).send(finance);
    }
    catch (err) {
        return res
            .status(500)
            .send('Internal server error, please contact support');
    }
});
exports.getSingleFinance = getSingleFinance;
const updateFinance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const financeitem = yield services_1.financeService.updateFinance(req);
        console.log('yyy', financeitem);
        return res.status(200).send(financeitem);
    }
    catch (error) {
        return res
            .status(500)
            .send('Internal server error, please contact support at');
    }
});
exports.updateFinance = updateFinance;
