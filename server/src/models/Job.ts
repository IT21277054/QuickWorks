import { Item } from './Item'; // Import the Item class if it's in a separate file

class Job {
  jobId: number;
  customerId: number;
  location: string;
  jobType: string;
  jobDescription: string;
  jobStatus: string;
  dateOfCompletion: Date | null;
  timeOfArrival: string | null;
  workerId: number | null;
  bringGood: boolean | null;
  items: Item[] | null;

  constructor(
    jobId: number,
    customerId: number,
    location: string,
    jobType: string,
    jobDescription: string,
    jobStatus: string,
    dateOfCompletion: Date | null,
    timeOfArrival: string | null,
    workerId: number | null,
    bringGood: boolean | null,
    items: Item[] | null
  ) {
    this.jobId = jobId;
    this.customerId = customerId;
    this.location = location;
    this.jobType = jobType;
    this.jobDescription = jobDescription;
    this.jobStatus = jobStatus;
    this.dateOfCompletion = dateOfCompletion;
    this.timeOfArrival = timeOfArrival;
    this.workerId = workerId;
    this.bringGood = bringGood;
    this.items = items;
  }
}

export { Job };
