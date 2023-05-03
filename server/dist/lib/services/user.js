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
exports.auth = exports.refreshToken = exports.login = exports.register = void 0;
const User_1 = require("../models/User");
const register = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, confirmPassword } = req.body;
    const newUser = new User_1.UserModel({
        name: name,
        email: email,
        password: password,
    });
    const userCreated = yield newUser.save();
    return userCreated;
});
exports.register = register;
const login = (req) => __awaiter(void 0, void 0, void 0, function* () { });
exports.login = login;
const refreshToken = (req) => __awaiter(void 0, void 0, void 0, function* () { });
exports.refreshToken = refreshToken;
const auth = (token) => __awaiter(void 0, void 0, void 0, function* () { });
exports.auth = auth;
