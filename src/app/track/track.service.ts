import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { db } from 'src/db';

@Injectable()
export class TrackService {
  create(createTrackDto: CreateTrackDto) {
    return db.track.create(createTrackDto);
  }

  findAll() {
    return db.track.findAll();
  }

  findOne(id: string) {
    return db.track.findOne(id);
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    return db.track.update(id, updateTrackDto);
  }

  remove(id: string) {
    return db.track.remove(id);
  }
}
