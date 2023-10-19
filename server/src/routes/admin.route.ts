// routes/workerRoutes.ts
import { Router } from 'express';
import { WorkerController } from '../controllers/admin.controller';

const router = Router();
const workerController = new WorkerController();

router.get('/all', workerController.getAllWorkers);
router.get('/worker:id', workerController.getWorkerById);
router.post('/add', workerController.addWorker);
router.put('/update:id', workerController.updateWorker);
router.delete('/delete:id', workerController.deleteWorker);

export default router;