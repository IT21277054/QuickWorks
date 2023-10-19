import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WorkerSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
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
      type: String,
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
    status:{
      type: String,
    },

  },
  { timestamps: true },
);

const Worker = mongoose.model('Worker', WorkerSchema);
export default Worker;
