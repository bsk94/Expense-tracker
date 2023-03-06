"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const finance_1 = __importDefault(require("./finance"));
const router = (0, express_promise_router_1.default)();
router.use('/', finance_1.default);
exports.default = router;
