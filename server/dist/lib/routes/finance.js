"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const controllers_1 = require("../controllers");
const router = (0, express_promise_router_1.default)();
router.post('/finance', controllers_1.financeController.addFinance);
router.get('/finance', controllers_1.financeController.getFinance);
router.get('/finance/:financeType/:dates?', controllers_1.financeController.filterExpense);
router.get('/finance/:id', controllers_1.financeController.getSingleFinance);
router.delete('/finance/:id', controllers_1.financeController.deleteFinance);
router.patch('/finance/:id', controllers_1.financeController.updateFinance);
exports.default = router;
