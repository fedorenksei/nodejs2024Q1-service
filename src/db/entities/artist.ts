import { Crud } from '../crud';

export interface Artist {
  id: string;
  name: string;
  grammy: boolean;
}

export const artistDb = new Crud<Artist>();
