import { Router } from 'express';
import JobController from '../controllers/JobController';
import JobService from '../services/JobService';
import { Job } from '../models/Job';

const jobrouter = Router();

const jobService = new JobService();
const jobController = new JobController(jobService);

jobrouter.post('/jobs', async (req, res) => {
  const jobData = req.body as Job
  const result = await jobController.createJob(jobData);
  res.json(result);
});

jobrouter.get('/jobs/:jobId', async (req, res) => {
  const jobId = req.params.jobId;
  const result = await jobController.getJob(jobId);
  res.json(result);
});

jobrouter.put('/jobs/:jobId', async (req, res) => {
  const jobId = req.params.jobId;
  const jobData = req.body as Job;
  const result = await jobController.updateJob(jobId, jobData);
  res.json(result);
});

jobrouter.delete('/jobs/:jobId', async (req, res) => {
  const jobId = req.params.jobId;
  const result = await jobController.deleteJob(jobId);
  res.json(result);
});

jobrouter.get('/jobs', async (req, res) => {
  const result = await jobController.getAllJobs();
  res.json(result);
});

jobrouter.get('/jobs', async (req, res) => {
  try {
    const { jobId, jobStatus, workerId } = req.query;

    const jobs = await jobController.getJobsByCriteria(jobId, jobStatus, workerId);

    res.json(jobs);
  } catch (error) {
    console.error('Error retrieving jobs by criteria:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default jobrouter;
