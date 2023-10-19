// controller/WorkerController.ts
import { Request, Response } from 'express';
import WorkerService from '../services/admin.service';

export class WorkerController {
  getAllWorkers(req: Request, res: Response): void {
    const workers = WorkerService.getAllWorkers();
    res.json(workers);
  }

  getWorkerById(req: Request, res: Response): void {
    const { id } = req.params;
    const worker = WorkerService.getWorkerById(id);
    if (worker) {
      res.json(worker);
    } else {
      res.status(404).json({ message: 'Worker not found' });
    }
  }

  addWorker(req: Request, res: Response): void {
    const worker = req.body;
    WorkerService.addWorker(worker);
    res.status(201).json(worker);
  }

  updateWorker(req: Request, res: Response): void {
    const { id } = req.params;
    const updatedWorker = req.body;
    const currentWorker = WorkerService.getWorkerById(id);
    if (currentWorker) {
      if (currentWorker.status === 'activated') {
        updatedWorker.status = 'deactivated';
      } else if (currentWorker.status === 'deactivated') {
        updatedWorker.status = 'activated';
      } else {
        res.status(400).json({ message: 'Invalid status value' });
        return;
      }
      WorkerService.updateWorker(id, updatedWorker);
      res.json(updatedWorker);
    } else {
      res.status(404).json({ message: 'Worker not found' });
    }
  }
  

  deleteWorker(req: Request, res: Response): void {
    const { id } = req.params;
    WorkerService.deleteWorker(id);
    res.status(204).send();
  }
}
