import mongoose, { Schema, Document } from 'mongoose';

interface JobDocument extends Document {
  customerId: number;
  location: string;
  jobType: string;
  jobDescription: string;
  jobStatus: string;
  dateOfCompletion: Date | null;
  timeOfArrival: string | null;
  workerId: number | null;
  bringGood: boolean | null;
  paymentAmount: number;
  items: [] | null;
}

const JobSchema = new Schema<JobDocument>(
  {
    customerId: { type: Number, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    jobDescription: { type: String, required: true },
    jobStatus: { type: String, required: true },
    dateOfCompletion: { type: Date, default: null },
    timeOfArrival: { type: String, default: null },
    workerId: { type: Number, default: null },
    bringGood: { type: Boolean, default: null },
    // Use ItemModel.schema to reference the Item schema
  },
  { timestamps: true },
);

const JobModel = mongoose.model<JobDocument>('Job', JobSchema);

export { JobModel };
