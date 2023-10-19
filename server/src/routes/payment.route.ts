import { Router } from 'express';
import paymentController from '../controllers/payment.controller';
export const paymentRoute = Router();
// Route needed
paymentRoute.post('/createPaymentItem', paymentController.createPayment);
