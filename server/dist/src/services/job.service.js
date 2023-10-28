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
const job_1 = require("../models/job/job");
function createJob(jobData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const job = new job_1.JobModel(jobData);
            return yield job.save();
        }
        catch (err) {
            throw err;
        }
    });
}
function getJobById(jobId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield job_1.JobModel.findById(jobId);
        }
        catch (err) {
            throw err;
        }
    });
}
function getJobsByStatusAndId(workerId, status) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield job_1.JobModel.find({ workerId: workerId, jobStatus: status });
        }
        catch (err) {
            throw err;
        }
    });
}
function getJobsByWorkerId(workerId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield job_1.JobModel.find({ workerId: workerId });
        }
        catch (err) {
            throw err;
        }
    });
}
function updateJob(jobId, updatedData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //getByid(updata by id)
            const updatedJob = yield job_1.JobModel.findByIdAndUpdate(jobId, updatedData, {
                new: true,
            });
            if (!updatedJob) {
                throw new Error('Job not found');
            }
            return updatedJob;
        }
        catch (err) {
            throw err;
        }
    });
}
function deleteJob(jobId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedJob = yield job_1.JobModel.findByIdAndDelete(jobId);
            if (!deletedJob) {
                throw new Error('Job not found');
            }
            return true;
        }
        catch (err) {
            throw err;
        }
    });
}
function getJobsByStatusAndIdAndWorkerid(workerId, status) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield job_1.JobModel.find({ workerId: workerId, jobStatus: status });
        }
        catch (err) {
            throw err;
        }
    });
}
function getJobsByStatus(status) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('lol', status);
        try {
            return yield job_1.JobModel.find({ jobStatus: status });
        }
        catch (err) {
            throw err;
        }
    });
}
function countJobsByStatus(status) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield job_1.JobModel.countDocuments({ jobStatus: status });
        }
        catch (err) {
            throw err;
        }
    });
}
exports.default = {
    createJob,
    getJobById,
    getJobsByStatusAndId,
    getJobsByWorkerId,
    updateJob,
    deleteJob,
    countJobsByStatus,
    getJobsByStatusAndIdAndWorkerid,
    getJobsByStatus,
};
