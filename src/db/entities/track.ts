import { Crud } from '../crud';

export interface Track {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;
}

export const trackDb = new Crud<Track>();
