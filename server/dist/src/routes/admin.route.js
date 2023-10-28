"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoute = void 0;
// routes/workerRoutes.ts
const express_1 = require("express");
const admin_controller_1 = __importDefault(require("../controllers/admin.controller"));
exports.adminRoute = (0, express_1.Router)();
// adminRoute.get('/all', workerController.getAllNonPendingWorkers);
exports.adminRoute.get('/worker/:workerId', admin_controller_1.default.getWorkerById);
exports.adminRoute.post('/add', admin_controller_1.default.addWorker);
exports.adminRoute.put('/update/:workerId', admin_controller_1.default.updateWorker);
exports.adminRoute.delete('/delete/:id', admin_controller_1.default.deleteWorker);
// adminRoute.post('/sendpass', workerController.sendPassword);
exports.adminRoute.get('/allActive', admin_controller_1.default.getAllNonPendingWorkers);
