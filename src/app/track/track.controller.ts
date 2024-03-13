import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ParamsWithId } from '../util-classes';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post()
  create(@Body() createTrackDto: CreateTrackDto) {
    return this.trackService.create(createTrackDto);
  }

  @Get()
  findAll() {
    return this.trackService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: ParamsWithId) {
    const item = this.trackService.findOne(id);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  @Put(':id')
  update(
    @Param() { id }: ParamsWithId,
    @Body() updateTrackDto: UpdateTrackDto,
  ) {
    const item = this.trackService.update(id, updateTrackDto);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() { id }: ParamsWithId) {
    if (!this.trackService.remove(id)) throw new NotFoundException();
  }
}
