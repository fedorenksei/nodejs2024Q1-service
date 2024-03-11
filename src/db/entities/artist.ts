import { Crud } from '../crud';

export interface Artist {
  id: string;
  name: string;
  grammy: boolean;
}

class ArtistCrud extends Crud<Artist> {
  deletionCb?: (id: string) => void;

  remove(id: string): boolean {
    this.deletionCb?.(id);
    return super.remove(id);
  }

  subscribeToDeletion(cb: (id: string) => void) {
    this.deletionCb = cb;
  }
}

export const artistDb = new ArtistCrud();
