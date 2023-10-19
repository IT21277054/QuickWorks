// services/adminServices.ts
import { IWorker } from '../models/worker/IWorker';
import WorkerModel, { Worker } from '../models/worker/worker.model';

class WorkerService {

  async getAllWorkers(): Promise<Worker[]> {
    try {
      const workers = await WorkerModel.find().exec();
      return workers;
    } catch (error) {
      // Handle errors here, e.g., log the error and return a custom error message.
      console.error('Error in getAllWorkers:', error);
      throw new Error('Failed to fetch workers');
    }
  }

  async getWorkerById(id: string): Promise<Worker | null> {
    try {
      const worker = await WorkerModel.findById(id).exec();
      return worker;
    } catch (error) {
      console.error('Error in getWorkerById:', error);
      throw new Error('Failed to fetch worker by ID');
    }
  }

  async addWorker(worker: IWorker): Promise<Worker> {
    try {
      const newWorker = await WorkerModel.create(worker);
      return newWorker;
    } catch (error) {
      console.error('Error in addWorker:', error);
      throw new Error('Failed to add worker');
    }
  }

  async updateWorker(id: string, updatedWorker: IWorker): Promise<Worker | null> {
    try {
      const worker = await WorkerModel.findById(id).exec();
      if (!worker) {
        throw new Error('Worker not found');
      }

      // Update the fields you want to update
      if (updatedWorker.status) {
        worker.status = updatedWorker.status;
      }

      await worker.save();
      return worker;
    } catch (error) {
      console.error('Error in updateWorker:', error);
      throw new Error('Failed to update worker');
    }
  }

  async deleteWorker(id: string): Promise<void> {
    try {
      const result = await WorkerModel.deleteOne({ _id: id }).exec();
      if (result.deletedCount === 0) {
        throw new Error('Worker not found');
      }
    } catch (error) {
      console.error('Error in deleteWorker:', error);
      throw new Error('Failed to delete worker');
    }
  }
}

export default new WorkerService();
