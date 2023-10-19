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
const express_1 = require("express");
const JobController_1 = __importDefault(require("../controllers/JobController"));
const JobService_1 = __importDefault(require("../services/JobService"));
const jobrouter = (0, express_1.Router)();
const jobService = new JobService_1.default();
const jobController = new JobController_1.default(jobService);
jobrouter.post('/jobs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobData = req.body;
    const result = yield jobController.createJob(jobData);
    res.json(result);
}));
jobrouter.get('/jobs/:jobId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobId = req.params.jobId;
    const result = yield jobController.getJob(jobId);
    res.json(result);
}));
jobrouter.put('/jobs/:jobId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobId = req.params.jobId;
    const jobData = req.body;
    const result = yield jobController.updateJob(jobId, jobData);
    res.json(result);
}));
jobrouter.delete('/jobs/:jobId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobId = req.params.jobId;
    const result = yield jobController.deleteJob(jobId);
    res.json(result);
}));
jobrouter.get('/jobs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield jobController.getAllJobs();
    res.json(result);
}));
jobrouter.get('/jobs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { jobId, jobStatus, workerId } = req.query;
        const jobs = yield jobController.getJobsByCriteria(jobId, jobStatus, workerId);
        res.json(jobs);
    }
    catch (error) {
        console.error('Error retrieving jobs by criteria:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.default = jobrouter;
