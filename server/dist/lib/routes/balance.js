"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const controllers_1 = require("../controllers");
const auth_1 = require("../services/auth");
const router = (0, express_promise_router_1.default)();
router.get('/', auth_1.secureRoute, controllers_1.balanceController.getBalance);
exports.default = router;
