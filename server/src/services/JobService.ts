import admin from 'firebase-admin';
import { Job } from '../models/Job';

const serviceAccount = require('path/to/serviceAccountKey.json');
const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://quickworks-8ecb3-default-rtdb.firebaseio.com/',
};
admin.initializeApp(firebaseConfig);

class FirebaseServiceError extends Error {
  details: any;

  constructor(message: string, details?: any) {
    super(message);
    this.details = details;
  }
}

class JobService {
  private db: admin.firestore.Firestore;

  constructor() {
    this.db = admin.firestore();
  }

  async createJob(job: Job): Promise<string> {
    try {
      const jobRef = this.db.collection('jobs').doc();
      await jobRef.set(job);
      return jobRef.id;
    } catch (error) {
      throw new FirebaseServiceError('Failed to create job', error);
    }
  }

  async getJob(jobId: string): Promise<Job | null> {
    try {
      const jobSnapshot = await this.db.collection('jobs').doc(jobId).get();
      if (jobSnapshot.exists) {
        return jobSnapshot.data() as Job;
      } else {
        return null; // Return null when the job is not found
      }
    } catch (error) {
      throw new FirebaseServiceError('Failed to get job', error);
    }
  }

  async updateJob(jobId: string, jobData: Job): Promise<void> {
    try {
      await this.db.collection('jobs').doc(jobId).set(jobData, { merge: true });
    } catch (error) {
      throw new FirebaseServiceError('Failed to update job', error);
    }
  }

  async deleteJob(jobId: string): Promise<void> {
    try {
      await this.db.collection('jobs').doc(jobId).delete();
    } catch (error) {
      throw new FirebaseServiceError('Failed to delete job', error);
    }
  }

  async getAllJobs(): Promise<Job[]> {
    try {
      const jobsSnapshot = await this.db.collection('jobs').get();
      const jobs: Job[] = [];
      jobsSnapshot.forEach((doc) => {
        jobs.push(doc.data() as Job);
      });
      return jobs;
    } catch (error) {
      throw new FirebaseServiceError('Failed to get jobs', error);
    }
  }

  async getJobsByCriteria(jobId: number | null, jobStatus: string | null, workerId: number | null): Promise<Job[]> {
    try {
      let query = this.db.collection('jobs') as admin.firestore.CollectionReference;

      if (jobId) {
        query = query.where('jobId', '==', jobId);
      }
      
      if (jobStatus) {
        query = query.where('jobStatus', '==', jobStatus);
      }

      if (workerId) {
        query = query.where('workerId', '==', workerId);
      }

      const querySnapshot = await query.get();

      const jobs: Job[] = [];

      querySnapshot.forEach((doc) => {
        jobs.push(doc.data() as Job);
      });

      return jobs;
    } catch (error) {
      throw new FirebaseServiceError('Failed to get jobs by criteria', error);
    }
  }
}

export default JobService;
