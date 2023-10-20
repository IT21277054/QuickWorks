import { JobModel } from '../models/job/job';

async function createJob(jobData: any): Promise<any> {
  try {
    return await JobModel.create(jobData);
  } catch (err) {
    throw err;
  }
}

async function getJobById(jobId: string): Promise<any> {
  try {
    return await JobModel.findById(jobId);
  } catch (err) {
    throw err;
  }
}

async function getJobsByStatusAndId(workerId: string, status: string): Promise<any[]> {
  try {
    return await JobModel.find({ workerId: workerId, jobStatus: status });
  } catch (err) {
    throw err;
  }
}

async function getJobsByWorkerId(workerId: number): Promise<any[]> {
  try {
   
    return await JobModel.find({ workerId: workerId });
  } catch (err) {
    throw err;
  }
}

async function updateJob(jobId: string, updatedData: any): Promise<any> {
  try {
    //getByid(updata by id)
    
    const updatedJob = await JobModel.findByIdAndUpdate(jobId, updatedData, {
      new: true,
    });

    if (!updatedJob) {
      throw new Error('Job not found');
    }
    return updatedJob;
  } catch (err) {
    throw err;
  }
}

async function deleteJob(jobId: string): Promise<boolean> {
  try {
    const deletedJob = await JobModel.findByIdAndDelete(jobId);

    if (!deletedJob) {
      throw new Error('Job not found');
    }

    return true;
  } catch (err) {
    throw err;
  }
}
async function getJobsByStatusAndIdAndWorkerid(workerId: number, status: string): Promise<any[]> {
    try {
      return await JobModel.find({ workerId: workerId, jobStatus: status });
    } catch (err) {
      throw err;
    }
  }
  
  async function countJobsByStatus(status: string): Promise<number> {
    try {
      return await JobModel.countDocuments({ jobStatus: status });
    } catch (err) {
      throw err;
    }
  }

  async function updateJobByStatusandJobId(jobId: string, jobStatus: string): Promise<any> {
    try {
      // Get the jobModel by id
      const jobModel = await getJobById(jobId);
    
      if (!jobModel) {
        throw new Error('Job not found');
      }
    
      // Update the jobStatus field
      jobModel.jobStatus = jobStatus;
      
      // Use the 'await' keyword to ensure the update is complete
      const updatedJob = await JobModel.findByIdAndUpdate(jobId, jobModel, {
        new: true,
      });
      return updatedJob;
    } catch (err) {
      throw err;
    }
  }
  
export default {
  createJob,
  getJobById,
  getJobsByStatusAndId,
  getJobsByWorkerId,
  updateJob,
  deleteJob,
  countJobsByStatus,
  getJobsByStatusAndIdAndWorkerid,
  updateJobByStatusandJobId
};
