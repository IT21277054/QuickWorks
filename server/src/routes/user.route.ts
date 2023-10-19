import { Router } from 'express';
import userController from '../controllers/user.controller';
export const userRoute = Router();
// Route needed
userRoute.post('/createReview', userController.createReview);
