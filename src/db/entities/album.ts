import { Crud } from '../crud';

export interface Album {
  id: string;
  name: string;
  year: number;
  artistId: string | null;
}

class AlbumCrud extends Crud<Album> {
  deletionCb?: (id: string) => void;

  remove(id: string): boolean {
    this.deletionCb?.(id);
    return super.remove(id);
  }

  subscribeToDeletion(cb: (id: string) => void) {
    this.deletionCb = cb;
  }
}

export const albumDb = new AlbumCrud();
