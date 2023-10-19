// services/WorkerService.ts
import { Worker } from '../models/worker.model';

class WorkerService {
  private workers: Worker[] = [];

  getAllWorkers(): Worker[] {
    return this.workers;
  }

  getWorkerById(id: string): Worker | undefined {
    return this.workers.find((worker) => worker.id === id);
  }

  addWorker(worker: Worker): void {
    this.workers.push(worker);
  }

  updateWorker(id: string, updatedWorker: Worker): void {
    const index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      const currentStatus = this.workers[index].status;
      const newStatus = currentStatus === 'activated' ? 'deactivated' : 'activated';
      // Only update the status field
      this.workers[index].status = newStatus;
    }
  }
  

  deleteWorker(id: string): void {
    this.workers = this.workers.filter((worker) => worker.id !== id);
  }
}

export default new WorkerService();