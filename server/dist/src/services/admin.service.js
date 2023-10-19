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
const worker_model_1 = __importDefault(require("../models/worker/worker.model"));
function getPendingWorkers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Use the find method with a filter condition to get workers with status 'pending'
            const pendingWorkers = yield worker_model_1.default.find({ status: 'pending' }).select('-password');
            return pendingWorkers;
        }
        catch (error) {
            // Handle errors here, e.g., log the error and return a custom error message.
            throw error;
        }
    });
}
const getWorkerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const worker = yield worker_model_1.default.findById(id);
        return worker;
    }
    catch (err) {
        throw err;
    }
});
// async function addWorker(worker: IWorker): Promise<any> {
//   try {
//     const newWorker = await WorkerModel.create(worker);
//     return newWorker;
//   } catch (error) {
//     console.error('Error in addWorker:', error);
//     throw new Error('Failed to add worker');
//   }
// }
function addWorker(worker) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Create a new worker document with qualifications subdocument
            const newWorker = yield worker_model_1.default.create(Object.assign(Object.assign({}, worker), { qualifications: {
                    education: worker.qualifications.education,
                    experience: worker.qualifications.experience,
                    recommendation: worker.qualifications.recommendation,
                } }));
            return newWorker;
        }
        catch (error) {
            console.error('Error in addWorker:', error);
            throw new Error('Failed to add worker');
        }
    });
}
const updateWorker = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const worker = yield worker_model_1.default.updateOne({ _id: id }, { status: status });
        return { res: 'Updated' };
    }
    catch (err) {
        throw err;
    }
});
function deleteWorker(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield worker_model_1.default.findByIdAndDelete(id);
            if (!result) {
                throw new Error('Worker not found');
            }
            return true;
        }
        catch (err) {
            throw err; // You can rethrow the error if you want to handle it elsewhere in your code
        }
    });
}
exports.default = { getPendingWorkers, getWorkerById, addWorker, deleteWorker, updateWorker };
