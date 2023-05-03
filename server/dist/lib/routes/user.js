"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const controllers_1 = require("../controllers");
const router = (0, express_promise_router_1.default)();
const { register, login, refreshToken } = controllers_1.userController;
router.post('/register', register);
router.post('/login', login);
router.post('/refreshToken', refreshToken);
exports.default = router;
