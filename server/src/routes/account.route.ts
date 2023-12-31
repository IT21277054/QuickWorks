import { Router } from 'express';
import accountController from '../controllers/account.controller';
import AuthGuard from '../utils/auth.guard';

export const accountRoute = Router();

accountRoute.post('/createAccount', accountController.signUp);
accountRoute.post('/login', accountController.login);
accountRoute.get('/currentUser',AuthGuard, accountController.getCurrentUser);
accountRoute.post('/sendOTP', accountController.sendOTP);
accountRoute.post('/verifyOTP', accountController.verifyOTP);
accountRoute.put('/changeToActive/:email',accountController.changeAccountStatus)
accountRoute.put('/recoverypassword', accountController.resetPassword);