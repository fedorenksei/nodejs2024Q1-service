import { Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ParamsWithId } from '../util-classes';
import { FavsService } from './favs.service';

@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Get()
  findAll() {
    return this.favsService.findAll();
  }

  @Post('track/:id')
  addTrack(@Param() { id }: ParamsWithId) {
    return this.favsService.addTrack(id);
  }
  @Post('album/:id')
  addAlbum(@Param() { id }: ParamsWithId) {
    return this.favsService.addAlbum(id);
  }
  @Post('artist/:id')
  addArtist(@Param() { id }: ParamsWithId) {
    return this.favsService.addArtist(id);
  }

  @Delete('track/:id')
  @HttpCode(204)
  removeTrack(@Param() { id }: ParamsWithId) {
    return this.favsService.removeTrack(id);
  }
  @Delete('album/:id')
  @HttpCode(204)
  removeAlbum(@Param() { id }: ParamsWithId) {
    return this.favsService.removeAlbum(id);
  }
  @Delete('artist/:id')
  @HttpCode(204)
  removeArtist(@Param() { id }: ParamsWithId) {
    return this.favsService.removeArtist(id);
  }
}
