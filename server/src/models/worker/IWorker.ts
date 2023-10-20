export interface IWorker {
    // workerId: string; // Add workerId
    name: string;
    jobTitle: string;
    contactNumber: number;
    location: string;
    email: string;
    qualifications: {
        education: string;
        experience: string;
        recommendation: string;
    }; 
    status: WorkerStatus;

}

export enum WorkerStatus {
    PENDING = 'pending',
    ACTIVE = 'active',
    DEACTIVE = 'deactive',
  }
  