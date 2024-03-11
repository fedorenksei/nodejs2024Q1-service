import { Crud } from './crud';

export interface User {
  id: string;
  login: string;
  password: string;
}

export const userDb = new Crud<User>();
