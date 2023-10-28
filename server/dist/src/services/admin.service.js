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
//get pending worker
// async function getPendingWorkers(): Promise<any> {
//   try {
//     // Use the find method with a filter condition to get workers with status 'pending'
//     const pendingWorkers = await WorkerModel.find({ status: 'pending' }).select('-password');
//     return pendingWorkers;
//   } catch (error) {
//     // Handle errors here, e.g., log the error and return a custom error message.
//     throw error;
//   }
// }
//get activated and deactivated workers
function getNonPendingWorkers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Use the find method with a filter condition to get workers with a status other than 'pending'
            const nonPendingWorkers = yield worker_model_1.default.find({ status: { $ne: 'pending' } }).select('-password');
            return nonPendingWorkers;
        }
        catch (error) {
            // Handle errors here, e.g., log the error and return a custom error message.
            throw error;
        }
    });
}
//get  workerby Id
const getWorkerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const worker = yield worker_model_1.default.findById(id);
        return worker;
    }
    catch (err) {
        throw err;
    }
});
function addWorker(worker) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newWorker = yield worker_model_1.default.create(worker);
            return newWorker;
        }
        catch (error) {
            console.error('Error in addWorker:', error);
            throw new Error('Failed to add worker');
        }
    });
}
function add(worker) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Create a new worker document with qualifications subdocument
            const newWorker = yield worker_model_1.default.create({
                worker,
                qualifications: {
                    education: worker.qualifications.education,
                    experience: worker.qualifications.experience,
                    recommendation: worker.qualifications.recommendation,
                },
            });
            return newWorker;
        }
        catch (error) {
            console.error('Error in addWorker:', error);
            throw new Error('Failed to add worker');
        }
    });
}
//change worker status
const updateWorker = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    try {
        const worker = yield worker_model_1.default.findById(id);
        console.log(worker);
        if ((worker === null || worker === void 0 ? void 0 : worker.status) == 'activate') {
            yield worker_model_1.default.findByIdAndUpdate(id, { status: 'deactivate' });
        }
        else {
            yield worker_model_1.default.findByIdAndUpdate(id, { status: 'activate' });
        }
        return { res: 'Updated' };
    }
    catch (err) {
        throw err;
    }
});
//delete worker
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
// const sendWorkerByEmail = (password: string, email: string) => {
//   try {
//     console.log(process.env.EMAIL_PASS);
//     let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.USER_EMAIL,
//         pass: process.env.EMAIL_PASS,
//       },
//     });
//     let mailOptions = {
//       from: process.env.USER_EMAIL,
//       to: email,
//       subject: `Worker account created,`,
//       text: 'Your account hs been created. Password: ${password}',
//     };
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Email sent : ', info.response);
//       }
//     });
//   } catch (err: any) {
//     console.log(err);
//   }
// };
exports.default = { getNonPendingWorkers, getWorkerById, addWorker, deleteWorker, updateWorker, add };
