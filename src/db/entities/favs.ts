import { albumDb } from './album';
import { artistDb } from './artist';
import { trackDb } from './track';

class Favs {
  private favTracks = new Set<string>();
  private favAlbums = new Set<string>();
  private favArtists = new Set<string>();

  findAll() {
    return {
      tracks: trackDb.findAll().filter((item) => this.favTracks.has(item.id)),
      artists: artistDb
        .findAll()
        .filter((item) => this.favArtists.has(item.id)),
      albums: albumDb.findAll().filter((item) => this.favAlbums.has(item.id)),
    };
  }

  addTrack(id: string) {
    if (!trackDb.findOne(id)) return false;
    this.favTracks.add(id);
    return true;
  }
  addArtist(id: string) {
    if (!artistDb.findOne(id)) return false;
    this.favArtists.add(id);
    return true;
  }
  addAlbum(id: string) {
    if (!albumDb.findOne(id)) return false;
    this.favAlbums.add(id);
    return true;
  }

  removeTrack(id: string) {
    if (!trackDb.findOne(id)) return false;
    this.favTracks.delete(id);
    return true;
  }
  removeArtist(id: string) {
    if (!artistDb.findOne(id)) return false;
    this.favArtists.delete(id);
    return true;
  }
  removeAlbum(id: string) {
    if (!albumDb.findOne(id)) return false;
    this.favAlbums.delete(id);
    return true;
  }
}

export const favsDb = new Favs();
