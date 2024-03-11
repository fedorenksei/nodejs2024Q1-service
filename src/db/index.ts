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
  ) {}
}

export const db = new Database(userDb, artistDb, albumDb, trackDb);
