// routes/workerRoutes.ts
import { Router } from 'express';
import  workerController  from '../controllers/admin.controller';

export const adminRoute = Router();

adminRoute.get('/all', workerController.getAllWorkers);
adminRoute.get('/worker/:id', workerController.getWorkerById);
adminRoute.post('/add', workerController.addWorker);
adminRoute.put('/update/:id', workerController.updateWorker);
adminRoute.delete('/delete/:id', workerController.deleteWorker);

