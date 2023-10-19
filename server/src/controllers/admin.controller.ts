import { Request, Response } from 'express';
import { IWorker } from '../models/worker/IWorker';
import workerModel from "../models/worker/worker.model";

const getAllWorkers = async (req: Request, res: Response) => {
  try {
    const workers = await workerModel.find();
    res.status(200).json(workers);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const getWorkerById = async (req: Request, res: Response) => {
  try {
    const workerId = req.params.id;
    const worker = await workerModel.findById(workerId);
    if (worker) {
      res.status(200).json(worker);
    } else {
      res.status(404).json({ error: 'Worker not found' });
    }
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const addWorker = async (req: Request, res: Response) => {
  try {
    const workerData = req.body;
    const newWorker = await workerModel.create(workerData);
    res.status(201).json(newWorker);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const updateWorker = async (req: Request, res: Response) => {
  try {
    const workerId = req.params.id;
    const updatedData = req.body;
    const updatedWorker = await workerModel.findByIdAndUpdate(workerId, updatedData, { new: true });
    if (updatedWorker) {
      res.status(200).json(updatedWorker);
    } else {
      res.status(404).json({ error: 'Worker not found' });
    }
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const deleteWorker = async (req: Request, res: Response) => {
  try {
    const workerId = req.params.id;
    const deletedWorker = await workerModel.findByIdAndDelete(workerId);
    if (deletedWorker) {
      res.status(200).json(deletedWorker);
    } else {
      res.status(404).json({ error: 'Worker not found' });
    }
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  getAllWorkers,
  getWorkerById,
  addWorker,
  updateWorker,
  deleteWorker,
};
