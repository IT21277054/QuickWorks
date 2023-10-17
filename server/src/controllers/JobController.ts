import { Job } from '../models/Job';
import JobService from '../services/JobService';
import axios, { AxiosError } from 'axios';

class JobController {
  private jobService: JobService;

  constructor(jobService: JobService) {
    this.jobService = jobService;
  }

  async createJob(jobData: Job): Promise<string> {
    try {
      const jobId = await this.jobService.createJob(jobData);
      return jobId;
    } catch (error: any) {
      throw new Error('Failed to create job: ' + error.message);
    }
  }

  async getJob(jobId: string): Promise<Job> {
    try {
      const job = await this.jobService.getJob(jobId);
      return job;
    } catch (error: any) {
      throw new Error('Failed to get job: ' + error.message);
    }
  }

  async updateJob(jobId: string, jobData: Job): Promise<void> {
    try {
      await this.jobService.updateJob(jobId, jobData);
    } catch (error: any) {
      throw new Error('Failed to update job: ' + error.message);
    }
  }

  async deleteJob(jobId: string): Promise<void> {
    try {
      await this.jobService.deleteJob(jobId);
    } catch (error: any) {
      throw new Error('Failed to delete job: ' + error.message);
    }
  }

  async getAllJobs(): Promise<Job[]> {
    try {
      const jobs = await this.jobService.getAllJobs();
      return jobs;
    } catch (error: any) {
      throw new Error('Failed to get jobs: ' + error.message);
    }
  }
}

export default JobController;
