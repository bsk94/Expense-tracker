"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const controllers_1 = require("../controllers");
const auth_1 = require("../services/auth");
const router = (0, express_promise_router_1.default)();
router.post('/', auth_1.secureRoute, controllers_1.financeController.addFinance);
router.get('/', auth_1.secureRoute, controllers_1.financeController.getFinance);
router.get('/:id', auth_1.secureRoute, controllers_1.financeController.getSingleFinance);
router.delete('/:id', auth_1.secureRoute, controllers_1.financeController.deleteFinance);
router.patch('/:id', auth_1.secureRoute, controllers_1.financeController.updateFinance);
exports.default = router;
