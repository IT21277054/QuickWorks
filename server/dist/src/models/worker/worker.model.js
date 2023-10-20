"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const IWorker_1 = require("./IWorker");
const Schema = mongoose_1.default.Schema;
const WorkerSchema = new Schema({
    // worker_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    // },
    name: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    qualifications: {
        education: {
            type: String,
        },
        experience: {
            type: String,
        },
        recommendation: {
            type: String,
        },
    },
    status: {
        type: String,
        default: IWorker_1.WorkerStatus.PENDING,
    },
}, { timestamps: false });
const Worker = mongoose_1.default.model('Worker', WorkerSchema);
exports.default = Worker;
