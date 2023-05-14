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
exports.refreshToken = exports.login = exports.register = void 0;
const services_1 = require("../services");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const userCreated = yield services_1.userService.register(req);
        return res.status(200).json({ success: true, userCreated });
    }
    catch (err) {
        res.status(500).json({ err });
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, refreshToken } = yield services_1.userService.login(req);
        return res
            .status(200)
            .json({ success: true, body: { token, refreshToken } });
    }
    catch (err) {
        res.status(500).json({ err });
    }
});
exports.login = login;
const refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield services_1.userService.refreshToken(req);
        console.log('aaa', token);
        return res.status(200).json({ success: true, token });
    }
    catch (err) {
        res.status(500).json({ err });
    }
});
exports.refreshToken = refreshToken;
