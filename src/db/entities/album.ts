import { Crud } from '../crud';

export interface Album {
  id: string;
  name: string;
  year: number;
  artistId: string | null;
}

export const albumDb = new Crud<Album>();
