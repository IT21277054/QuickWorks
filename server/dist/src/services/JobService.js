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
class FirebaseServiceError extends Error {
    constructor(message, details) {
        super(message);
        this.details = details;
    }
}
class JobService {
    constructor() {
        this.db = firebase_admin_1.default.firestore();
    }
    createJob(job) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobRef = this.db.collection('jobs').doc();
                yield jobRef.set(job);
                return jobRef.id;
            }
            catch (error) {
                throw new FirebaseServiceError('Failed to create job', error);
            }
        });
    }
    getJob(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobSnapshot = yield this.db.collection('jobs').doc(jobId).get();
                if (jobSnapshot.exists) {
                    return jobSnapshot.data();
                }
                else {
                    return null; // Return null when the job is not found
                }
            }
            catch (error) {
                throw new FirebaseServiceError('Failed to get job', error);
            }
        });
    }
    updateJob(jobId, jobData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.db.collection('jobs').doc(jobId).set(jobData, { merge: true });
            }
            catch (error) {
                throw new FirebaseServiceError('Failed to update job', error);
            }
        });
    }
    deleteJob(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.db.collection('jobs').doc(jobId).delete();
            }
            catch (error) {
                throw new FirebaseServiceError('Failed to delete job', error);
            }
        });
    }
    getAllJobs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobsSnapshot = yield this.db.collection('jobs').get();
                const jobs = [];
                jobsSnapshot.forEach((doc) => {
                    jobs.push(doc.data());
                });
                return jobs;
            }
            catch (error) {
                throw new FirebaseServiceError('Failed to get jobs', error);
            }
        });
    }
    getJobsByCriteria(jobId, jobStatus, workerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let query = this.db.collection('jobs');
                if (jobId) {
                    query = query.where('jobId', '==', jobId);
                }
                if (jobStatus) {
                    query = query.where('jobStatus', '==', jobStatus);
                }
                if (workerId) {
                    query = query.where('workerId', '==', workerId);
                }
                const querySnapshot = yield query.get();
                const jobs = [];
                querySnapshot.forEach((doc) => {
                    jobs.push(doc.data());
                });
                return jobs;
            }
            catch (error) {
                throw new FirebaseServiceError('Failed to get jobs by criteria', error);
            }
        });
    }
}
exports.default = JobService;
