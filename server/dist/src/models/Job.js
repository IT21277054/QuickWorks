"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
class Job {
    constructor(jobId, customerId, location, jobType, jobDescription, jobStatus, dateOfCompletion, timeOfArrival, workerId, bringGood, items) {
        this.jobId = jobId;
        this.customerId = customerId;
        this.location = location;
        this.jobType = jobType;
        this.jobDescription = jobDescription;
        this.jobStatus = jobStatus;
        this.dateOfCompletion = dateOfCompletion;
        this.timeOfArrival = timeOfArrival;
        this.workerId = workerId;
        this.bringGood = bringGood;
        this.items = items;
    }
}
exports.Job = Job;
