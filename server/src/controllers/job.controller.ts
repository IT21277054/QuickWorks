import { Request, Response } from 'express';
import jobservice from '../services/job.service';
import jobService from '../services/job.service';

export async function createJobController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const newJob = await jobservice.createJob(req.body);
    res.json(newJob);
  } catch (error) {
    res.status(500).json({ error: 'Job creation failed' });
  }
}

export async function getJobByIdController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const job = await jobservice.getJobById(req.params.jobId);
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Job retrieval failed' });
  }
}

export async function getJobsByStatusAndIdController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const jobs = await jobservice.getJobsByStatusAndId(
      req.params.workerId,
      req.params.status,
    );
    res.json(jobs);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Job retrieval failed ' + req.params.jobId + '' });
  }
}

export async function getJobsByWorkerIdController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const workerId = parseInt(req.params.workerId, 10);
    console.log(workerId);
    if (isNaN(workerId)) {
      res.status(400).json({ error: 'Invalid workerId parameter' });
      return;
    }
    console.log(workerId);
    const jobs = await jobservice.getJobsByWorkerId(workerId);
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Job retrieval failed req.params.workerId ' + +'' });
  }
}

export async function updateJobController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const updatedJob = await jobservice.updateJob(req.params.jobId, req.body);
    if (updatedJob) {
      res.json(updatedJob);
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Job update failed' });
  }
}

export async function getJobsByStatusAndWorkerIdController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const jobs = await jobservice.getJobsByStatusAndIdAndWorkerid(
      parseInt(req.params.workerId, 10),
      req.params.status,
    );
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Job retrieval failed' });
  }
}

export async function countJobsByStatusController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const count = await jobservice.countJobsByStatus(req.params.status);
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: 'Count failed' });
  }
}

export async function changeJobStatus(req: Request, res: Response) {
  try {
    const { status, jobId } = req.body;
    const jobStatus = await jobService.updateStatus(status, jobId);
    if (jobStatus != null) {
      res.status(200).json({ res: 'Updated' });
    }
  } catch (err: any) {
    res.status(400).json({ error: err });
  }
}
