import mongoose from 'mongoose';
import { WorkerStatus } from './IWorker';

const Schema = mongoose.Schema;

const WorkerSchema = new Schema(
  {
    worker_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
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
      default: WorkerStatus.PENDING,
    },

  },
  { timestamps: false },
);

const Worker = mongoose.model('Worker', WorkerSchema);
export default Worker;
