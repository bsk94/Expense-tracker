"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const finance_1 = __importDefault(require("./finance"));
const statistics_1 = __importDefault(require("./statistics"));
const balance_1 = __importDefault(require("./balance"));
const user_1 = __importDefault(require("./user"));
const router = (0, express_promise_router_1.default)();
router.use('/finance', finance_1.default);
router.use('/statistics', statistics_1.default);
router.use('/balance', balance_1.default);
router.use('/user', user_1.default);
exports.default = router;
