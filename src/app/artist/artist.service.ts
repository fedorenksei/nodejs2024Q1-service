import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { db } from 'src/db';

@Injectable()
export class ArtistService {
  create(createArtistDto: CreateArtistDto) {
    return db.artist.create(createArtistDto);
  }

  findAll() {
    return db.artist.findAll();
  }

  findOne(id: string) {
    return db.artist.findOne(id);
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return db.artist.update(id, updateArtistDto);
  }

  remove(id: string) {
    return db.artist.remove(id);
  }
}
