import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  expiredAt: {
    type: Date,
    required: true,
  },
});

const Otp = mongoose.model('Otp', OTPSchema);
export default Otp;