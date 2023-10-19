import { Request, Response } from 'express';
import JobService from '../services/JobService';
import { Job } from '../models/Job';
import admin from 'firebase-admin';

const serviceAccount = require('path/to/serviceAccountKey.json');
const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://quickworks-8ecb3-default-rtdb.firebaseio.com/',
};
admin.initializeApp(firebaseConfig);

class JobController {
  private jobService: JobService;
  private db: admin.firestore.Firestore;

  constructor(jobService: JobService) {
    this.jobService = jobService;
    this.db = admin.firestore();
  }

  async createJob(jobData: Job): Promise<string> {
    try {
      const jobId = await this.jobService.createJob(jobData);
      return jobId;
    } catch (error:any) {
      throw new Error('Failed to create job: ' + error.message);
    }
  }
  
  async getJob(jobId: string): Promise<Job | null> {
    try {
      const job = await this.db.collection('jobs').doc(jobId).get();
      if (job.exists) {
        return job.data() as Job;
      } else {
        return null;
      }
    } catch (error:any) {
      throw new Error('Failed to get job' + error.message);
    }
  }

  async updateJob(jobId: string, jobData: Job): Promise<void> {
    try {
      await this.jobService.updateJob(jobId, jobData);
    } catch (error:any) {
      throw new Error('Failed to update job: ' + error.message);
    }
  }

  async deleteJob(jobId: string): Promise<void> {
    try {
      await this.jobService.deleteJob(jobId);
    } catch (error:any) {
      throw new Error('Failed to delete job: ' + error.message);
    }
  }

  async getAllJobs(): Promise<Job[]> {
    try {
      const jobs = await this.jobService.getAllJobs();
      return jobs;
    } catch (error:any) {
      throw new Error('Failed to get jobs: ' + error.message);
    }
  }

  async getDashboardDetails(req: Request, res: Response) {
    try {
      const workerId: number = Number(req.params.workerId);
      const jobCollection = this.db.collection('jobs');
      const snapshot = await jobCollection.get();
  
      // Initialize status counts for the specific worker ID.
      const statusCounts: Record<string, number> = {
        Accepted: 0,
        'On Going': 0,
        Completed: 0,
        'Approved Job': 0,
      };
  
      snapshot.forEach((doc) => {
        const job = doc.data() as Job;
        if (job.workerId === workerId) {
          statusCounts[job.jobStatus]++;
        }
      });
  
      res.json(statusCounts);
    } catch (error) {
      console.error('Error retrieving job status counts:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getJobsByCriteria(req: Request, res: Response) {
    try {
      const jobId = req.query.jobId ? Number(req.query.jobId) : null;
      const jobStatus = req.query.jobStatus as string | null;
      const workerId = req.query.workerId ? Number(req.query.workerId) : null;
  
      // If any criteria is specified, filter the jobs; otherwise, get all jobs
      if (jobId !== null || jobStatus || workerId !== null) {
        const jobs = await this.jobService.getJobsByCriteria(jobId, jobStatus, workerId);
        res.json(jobs);
      } else {
        const allJobs = await this.jobService.getAllJobs();
        res.json(allJobs);
      }
    } catch (error) {
      console.error('Error retrieving jobs by criteria:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default JobController;
