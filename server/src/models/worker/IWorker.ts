export interface IWorker {
  status: string;
    // worker_id:string;
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

}
export enum WorkerStatus {
    PENDING = 'pending',
    ACTIVE = 'active',
    DECTIVE = 'deactive',
  }
  