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
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistService.create(createArtistDto);
  }

  @Get()
  findAll() {
    return this.artistService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: ParamsWithId) {
    const item = this.artistService.findOne(id);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  @Put(':id')
  update(
    @Param() { id }: ParamsWithId,
    @Body() updateArtistDto: UpdateArtistDto,
  ) {
    const item = this.artistService.update(id, updateArtistDto);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() { id }: ParamsWithId) {
    if (!this.artistService.remove(id)) throw new NotFoundException();
  }
}
