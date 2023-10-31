export enum AuthRole {
  OPEN = 'OPEN',
  USER = 'MANAGER',
  ADMIN = 'ADMIN',
  WORKER = 'WORKER',
}

export enum AccountStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  
}



export interface IAccount {
  fname: string;
  lname: string;
  password: string;
  email: string;
  mobile: string;
  role: string;
}
