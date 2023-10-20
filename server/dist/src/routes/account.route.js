"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRoute = void 0;
const express_1 = require("express");
const account_controller_1 = __importDefault(require("../controllers/account.controller"));
const auth_guard_1 = __importDefault(require("../utils/auth.guard"));
exports.accountRoute = (0, express_1.Router)();
exports.accountRoute.post('/createAccount', account_controller_1.default.signUp);
exports.accountRoute.post('/login', account_controller_1.default.login);
exports.accountRoute.get('/currentUser', auth_guard_1.default, account_controller_1.default.getCurrentUser);
