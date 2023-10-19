import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PaymentSchema = new Schema(
  {
    account_name: {
      type: String,
      require: true,
    },
    account_number: {
      type: Number,
      require: true,
    },
    bank: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model('Payment', PaymentSchema);
export default Payment;