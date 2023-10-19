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
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount = require('path/to/serviceAccountKey.json');
const firebaseConfig = {
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    databaseURL: 'https://quickworks-8ecb3-default-rtdb.firebaseio.com/',
};
firebase_admin_1.default.initializeApp(firebaseConfig);
class JobController {
    constructor(jobService) {
        this.jobService = jobService;
        this.db = firebase_admin_1.default.firestore();
    }
    createJob(jobData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobId = yield this.jobService.createJob(jobData);
                return jobId;
            }
            catch (error) {
                throw new Error('Failed to create job: ' + error.message);
            }
        });
    }
    getJob(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const job = yield this.db.collection('jobs').doc(jobId).get();
                if (job.exists) {
                    return job.data();
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error('Failed to get job' + error.message);
            }
        });
    }
    updateJob(jobId, jobData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.jobService.updateJob(jobId, jobData);
            }
            catch (error) {
                throw new Error('Failed to update job: ' + error.message);
            }
        });
    }
    deleteJob(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.jobService.deleteJob(jobId);
            }
            catch (error) {
                throw new Error('Failed to delete job: ' + error.message);
            }
        });
    }
    getAllJobs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobs = yield this.jobService.getAllJobs();
                return jobs;
            }
            catch (error) {
                throw new Error('Failed to get jobs: ' + error.message);
            }
        });
    }
    getDashboardDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const workerId = Number(req.params.workerId);
                const jobCollection = this.db.collection('jobs');
                const snapshot = yield jobCollection.get();
                // Initialize status counts for the specific worker ID.
                const statusCounts = {
                    Accepted: 0,
                    'On Going': 0,
                    Completed: 0,
                    'Approved Job': 0,
                };
                snapshot.forEach((doc) => {
                    const job = doc.data();
                    if (job.workerId === workerId) {
                        statusCounts[job.jobStatus]++;
                    }
                });
                res.json(statusCounts);
            }
            catch (error) {
                console.error('Error retrieving job status counts:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    getJobsByCriteria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobId = req.query.jobId ? Number(req.query.jobId) : null;
                const jobStatus = req.query.jobStatus;
                const workerId = req.query.workerId ? Number(req.query.workerId) : null;
                // If any criteria is specified, filter the jobs; otherwise, get all jobs
                if (jobId !== null || jobStatus || workerId !== null) {
                    const jobs = yield this.jobService.getJobsByCriteria(jobId, jobStatus, workerId);
                    res.json(jobs);
                }
                else {
                    const allJobs = yield this.jobService.getAllJobs();
                    res.json(allJobs);
                }
            }
            catch (error) {
                console.error('Error retrieving jobs by criteria:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.default = JobController;
