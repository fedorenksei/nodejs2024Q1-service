import { albumDb } from './entities/album';
import { artistDb } from './entities/artist';
import { trackDb } from './entities/track';
import { userDb } from './entities/user';

class Database {
  constructor(
    public user: typeof userDb,
    public artist: typeof artistDb,
    public album: typeof albumDb,
    public track: typeof trackDb,
  ) {
    album.subscribeToDeletion((id: string) => {
      track.findAll().forEach((item) => {
        if (item.albumId === id) item.albumId = null;
      });
    });
    artist.subscribeToDeletion((id: string) => {
      album.findAll().forEach((item) => {
        if (item.artistId === id) item.artistId = null;
      });
      track.findAll().forEach((item) => {
        if (item.artistId === id) item.artistId = null;
      });
    });
  }
}

export const db = new Database(userDb, artistDb, albumDb, trackDb);
