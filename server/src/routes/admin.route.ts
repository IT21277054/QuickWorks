// routes/workerRoutes.ts
import { Router } from 'express';
import  workerController  from '../controllers/admin.controller';

export const adminRoute = Router();

// adminRoute.get('/all', workerController.getAllNonPendingWorkers);
adminRoute.get('/worker/:workerId', workerController.getWorkerById);
adminRoute.post('/add', workerController.addWorker);
adminRoute.put('/update/:workerId', workerController.updateWorker);
adminRoute.delete('/delete/:id', workerController.deleteWorker);
// adminRoute.post('/sendpass', workerController.sendPassword);
adminRoute.get('/allActive', workerController.getAllNonPendingWorkers);



