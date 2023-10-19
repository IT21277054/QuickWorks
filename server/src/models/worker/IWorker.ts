export interface IWorker {
    id: string;
    name: string;
    jobTitle: string;
    contactNumber: string;
    location: string;
    email: string;
    status: string;
    qualifications: {
        education: string;
        experience: string;
        recommendation: string;
    }
}