"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const controllers_1 = require("../controllers");
const router = (0, express_promise_router_1.default)();
router.post('/', controllers_1.financeController.addFinance);
router.get('/', controllers_1.financeController.getFinance);
router.get('/:id', controllers_1.financeController.getSingleFinance);
router.delete('/:id', controllers_1.financeController.deleteFinance);
router.patch('/:id', controllers_1.financeController.updateFinance);
exports.default = router;
