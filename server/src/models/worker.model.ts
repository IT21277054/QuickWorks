class Worker {
  id: string;
  name: string;
  jobTitle: string;
  contactNumber: string;
  location: string;
  email: string;
  password: string;
  status?: string;
  qualifications: {
    education: string;
    experience: string;
    recommendation: string;
  };

  constructor(
    id: string,
    name: string,
    jobTitle: string,
    contactNumber: string,
    location: string,
    email: string,
    password: string,
    qualifications: {
      education: string;
      experience: string;
      recommendation: string;
    },
    status?: string
  ) {
    this.id = id;
    this.name = name;
    this.jobTitle = jobTitle;
    this.contactNumber = contactNumber;
    this.location = location;
    this.email = email;
    this.password = password;
    this.qualifications = qualifications;
    this.status = status;
  }
}

export { Worker };
