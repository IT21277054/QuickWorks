import { Request, Response } from 'express';
import { AccountStatus, IAccount } from '../models/account/IAccount';
import accountmodel from '../models/account/account.model';
import authService from '../utils/auth.service';
import OtpModel from '../models/OTP.model';
import nodemailer from 'nodemailer';

const signUp = async (req: Request, res: Response) => {
  try {
    const dto = req.body;
    console.log(dto)
    const newAcc = await authService.register(dto);
    res.status(200).json(newAcc);
  } catch (err: any) {
    res.status(400).json({ err: err });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("login ")
    const response = await authService.login(email, password);
    res.status(200).json(response);
  } catch (err: any) {
    res.status(400).json({ err: err });
  }
};

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const userId = req.currentUser.id;
    const user = await accountmodel.findById(userId);
    return res.status(200).json({ user: user });
  } catch (err: any) {
    res.status(400).json({ err: err });
  }
};

const sendOTP = async (req: Request, res: Response) => {
  console.log('here');
  const email = req.body.email;
  console.log(email);
  let generatedOTP = Math.floor(Math.random() * 10000);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const otp = generatedOTP;
  let mailOptions = {
    from: process.env.USER_EMAIL,
    to: email,
    subject: 'OTP',
    text: 'here is your otp',
    html: `<b>${otp}</b>`,
  };
  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);

    const createdAt = Date.now();
    const expiredAt = Date.now() + 300000;

    const newOTP = new OtpModel({
      email,
      otp,
      createdAt,
      expiredAt,
    });

    newOTP
      .save()
      .then(() => {
        res.json('OTP Added');
      })
      .catch((err: any) => {
        console.log(err);
      });
  });
};

const verifyOTP = async (req: Request, res: Response) => {
  console.log('here in verify')
  const email = req.body.email;
  const receivedOTP = req.body.otp;

  OtpModel
    .findOne({ email: email, otp: receivedOTP })
    .then((otp: any) => {
      if (otp) {
        if (otp.expiredAt > Date.now()) {
          OtpModel.deleteMany({ email: email }).catch((error: any) => {
            console.log(error);
          });
          res.json('verified');
        } else {
          OtpModel.deleteMany({ email: email }).catch((error: any) => {
            console.log(error);
          });
          res.json('expired');
        }
      } else {
        res.json('invalid');
      }
    })
    .catch((err: any) => {
      console.log(err);
    });
};

const changeAccountStatus = async(req:Request, res:Response) =>{
try{
  const {email} =  req.params;
  const status= await accountmodel.findOneAndUpdate({email:email},{status:AccountStatus.ACTIVE})
  return res.status(200).json({ status: 'Active' });
}catch(err:any){
  res.status(400).json({ err: err });
}
}

const resetPassword = async (req:Request, res:Response) => {
  try {
    const {password,email} = req.body;
    console.log(password,email)

    const customer = await accountmodel.findOne({ email });
    if (!customer) {
      return res.status(404).send({ error: 'Customer not found' });
    }

    const hash = await authService.createPasswordHash(password)

    await accountmodel.updateOne({ email: customer.email }, { password: hash });

    return res.status(200).send({ msg: 'Record updated' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: 'Internal server error' });
  }
};

export default {
  signUp,
  login,
  getCurrentUser,
  sendOTP,
  verifyOTP,
  changeAccountStatus,
  resetPassword
};
