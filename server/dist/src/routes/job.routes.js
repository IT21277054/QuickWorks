"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRouter = void 0;
const express_1 = __importDefault(require("express"));
const job_controller_1 = require("../controllers/job.controller");
exports.jobRouter = express_1.default.Router();
// Create a new job
exports.jobRouter.post('/create', job_controller_1.createJobController);
// Get a job by its ID
exports.jobRouter.get('/:jobId', job_controller_1.getJobByIdController);
// Get jobs by status and ID
exports.jobRouter.get('/:workerId/:status', job_controller_1.getJobsByStatusAndIdController);
// Update a job by its ID
exports.jobRouter.put('/:jobId', job_controller_1.updateJobController);
// Get jobs by status and worker ID
exports.jobRouter.get('/workers/:workerId/:status', job_controller_1.getJobsByStatusAndWorkerIdController);
// Get jobs by status
exports.jobRouter.get('/status', job_controller_1.getJobsByStatus);
// Count jobs by status
// jobRouter.get('/count/:status', countJobsByStatusController);
exports.default = exports.jobRouter;
