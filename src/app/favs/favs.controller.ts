import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UnprocessableEntityException,
} from '@nestjs/common';
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
    const result = this.favsService.addTrack(id);
    if (!result) throw new UnprocessableEntityException();
  }
  @Post('album/:id')
  addAlbum(@Param() { id }: ParamsWithId) {
    const result = this.favsService.addAlbum(id);
    if (!result) throw new UnprocessableEntityException();
  }
  @Post('artist/:id')
  addArtist(@Param() { id }: ParamsWithId) {
    const result = this.favsService.addArtist(id);
    if (!result) throw new UnprocessableEntityException();
  }

  @Delete('track/:id')
  @HttpCode(204)
  removeTrack(@Param() { id }: ParamsWithId) {
    const result = this.favsService.removeTrack(id);
    if (!result) throw new UnprocessableEntityException();
  }
  @Delete('album/:id')
  @HttpCode(204)
  removeAlbum(@Param() { id }: ParamsWithId) {
    const result = this.favsService.removeAlbum(id);
    if (!result) throw new UnprocessableEntityException();
  }
  @Delete('artist/:id')
  @HttpCode(204)
  removeArtist(@Param() { id }: ParamsWithId) {
    const result = this.favsService.removeArtist(id);
    if (!result) throw new UnprocessableEntityException();
  }
}
