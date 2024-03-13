import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { db } from 'src/db';

@Injectable()
export class AlbumService {
  create(createAlbumDto: CreateAlbumDto) {
    return db.album.create(createAlbumDto);
  }

  findAll() {
    return db.album.findAll();
  }

  findOne(id: string) {
    return db.album.findOne(id);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return db.album.update(id, updateAlbumDto);
  }

  remove(id: string) {
    return db.album.remove(id);
  }
}
