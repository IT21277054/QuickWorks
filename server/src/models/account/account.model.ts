import mongoose from 'mongoose';
import { AccountStatus, AuthRole } from './IAccount';

const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    fname: {
      type: String,
      require: true,
    },
    lname: {
      type: String,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default:AuthRole.USER
    },
    status: {
      type: String,
      default:AccountStatus.PENDING
    }
  },
  { timestamps: true },
);

const Account = mongoose.model('Account', AccountSchema);
export default Account;
