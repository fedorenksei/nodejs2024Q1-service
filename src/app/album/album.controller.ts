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
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumService.create(createAlbumDto);
  }

  @Get()
  findAll() {
    return this.albumService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: ParamsWithId) {
    const item = this.albumService.findOne(id);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  @Put(':id')
  update(
    @Param() { id }: ParamsWithId,
    @Body() updateAlbumDto: UpdateAlbumDto,
  ) {
    const item = this.albumService.update(id, updateAlbumDto);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() { id }: ParamsWithId) {
    if (!this.albumService.remove(id)) throw new NotFoundException();
  }
}
