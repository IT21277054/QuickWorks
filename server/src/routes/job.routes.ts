import express from 'express';
import {
   getJobByIdController,
   createJobController,
   getJobsByStatusAndIdController,
   getJobsByWorkerIdController,
   updateJobController,
   getJobsByStatusAndWorkerIdController,
   countJobsByStatusController
} from '../controllers/job.controller'

export const jobRouter = express.Router();


// Create a new job
jobRouter.post('/create', createJobController);

// Get a job by its ID
jobRouter.get('/:jobId', getJobByIdController);

// Get jobs by status and ID
jobRouter.get('/:workerId/:status', getJobsByStatusAndIdController);

// Update a job by its ID
jobRouter.put('/:jobId', updateJobController);

// Get jobs by status and worker ID
jobRouter.get('/workers/:workerId/:status', getJobsByStatusAndWorkerIdController);

// Count jobs by status
// jobRouter.get('/count/:status', countJobsByStatusController);


export default jobRouter;
