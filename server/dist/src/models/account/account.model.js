"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const IAccount_1 = require("./IAccount");
const Schema = mongoose_1.default.Schema;
const AccountSchema = new Schema({
    fname: {
        type: String,
        require: true,
    },
    lname: {
        type: String,
        require: true,
    },
    mobile: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: IAccount_1.AuthRole.USER
    },
    status: {
        type: String,
        default: IAccount_1.AccountStatus.PENDING
    }
}, { timestamps: true });
const Account = mongoose_1.default.model('Account', AccountSchema);
exports.default = Account;
