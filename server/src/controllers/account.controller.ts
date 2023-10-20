import { Request, Response } from 'express';
import { IAccount } from '../models/account/IAccount';
import accountmodel from '../models/account/account.model';
import authService from '../utils/auth.service';

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
    throw err;
  }
};


export default {
  signUp,
  login,
  getCurrentUser
};
