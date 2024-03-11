import { userDb } from './user';

class Database {
  public user = userDb;
}

export const db = new Database();
