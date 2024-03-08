import { Injectable } from '@nestjs/common';
import { db } from 'src/db';

@Injectable()
export class FavsService {
  findAll() {
    return db.favs.findAll();
  }

  addTrack(id: string) {
    return db.favs.addTrack(id);
  }
  addArtist(id: string) {
    return db.favs.addArtist(id);
  }
  addAlbum(id: string) {
    return db.favs.addAlbum(id);
  }

  removeTrack(id: string) {
    return db.favs.removeTrack(id);
  }
  removeArtist(id: string) {
    return db.favs.removeArtist(id);
  }
  removeAlbum(id: string) {
    return db.favs.removeAlbum(id);
  }
}
