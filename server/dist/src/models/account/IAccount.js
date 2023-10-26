"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountStatus = exports.AuthRole = void 0;
var AuthRole;
(function (AuthRole) {
    AuthRole["OPEN"] = "OPEN";
    AuthRole["USER"] = "MANAGER";
    AuthRole["ADMIN"] = "ADMIN";
    AuthRole["WORKER"] = "WORKER";
})(AuthRole || (exports.AuthRole = AuthRole = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["PENDING"] = "PENDING";
    AccountStatus["ACTIVE"] = "ACTIVE";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
