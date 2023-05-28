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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.refreshToken = exports.login = exports.register = void 0;
const User_1 = require("../models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, confirmPassword } = req.body;
    if (!email || !password || !name) {
        throw new Error('Please provide name, email and password');
    }
    const newUser = new User_1.UserModel({
        name: name,
        email: email,
        password: password,
    });
    const userCreated = yield newUser.save();
    return userCreated;
});
exports.register = register;
const login = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = req.body;
    if (!email || !password) {
        throw new Error('Please provide email and password');
    }
    const user = yield User_1.UserModel.findOne({ email }).select('+password');
    if (!user) {
        throw new Error('User cannot be found in the database');
    }
    const result = yield bcryptjs_1.default.compare(password, user.password);
    if (!result) {
        throw new Error('Please provide email and password');
    }
    const token = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user._id }, process.env.SECRET, {
        expiresIn: '1min',
    });
    const refreshToken = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user._id }, process.env.REFRESH_SECRET, {
        expiresIn: '1min',
    });
    return { token, refreshToken };
});
exports.login = login;
const refreshToken = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.body.refreshToken;
    const { id, exp } = jsonwebtoken_1.default.decode(refreshToken) || {};
    const dateNow = new Date();
    if (exp > dateNow.getTime() / 1000) {
        const token = jsonwebtoken_1.default.sign({ id: id }, process.env.SECRET, {
            expiresIn: '1min',
        });
        return token;
    }
    else {
        throw new Error('Refresh Token is expired');
    }
});
exports.refreshToken = refreshToken;
const auth = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, exp } = jsonwebtoken_1.default.decode(token) || {};
    if (id) {
        const dateNow = new Date();
        if (exp < dateNow.getTime() / 1000) {
            return null;
        }
        const user = yield User_1.UserModel.findOne({ _id: id });
        if (user === null || user === void 0 ? void 0 : user._id) {
            return user;
        }
    }
    return null;
});
exports.auth = auth;
