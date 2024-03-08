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
    if (!trackDb.findOne(id)) return;
    this.favTracks.add(id);
  }
  addArtist(id: string) {
    if (!artistDb.findOne(id)) return;
    this.favArtists.add(id);
  }
  addAlbum(id: string) {
    if (!albumDb.findOne(id)) return;
    this.favAlbums.add(id);
  }

  removeTrack(id: string) {
    if (!trackDb.findOne(id)) return;
    this.favTracks.delete(id);
  }
  removeArtist(id: string) {
    if (!artistDb.findOne(id)) return;
    this.favArtists.delete(id);
  }
  removeAlbum(id: string) {
    if (!albumDb.findOne(id)) return;
    this.favAlbums.delete(id);
  }
}

export const favsDb = new Favs();
