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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() { id }: ParamsWithId) {
    const item = this.userService.findOne(id);
    if (!item) {
      throw new NotFoundException();
    }
    return item;
  }

  @Put(':id')
  updatePassword(
    @Param() { id }: ParamsWithId,
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
  ) {
    return this.userService.updatePassword(id, updateUserPasswordDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() { id }: ParamsWithId) {
    if (!this.userService.remove(id)) throw new NotFoundException();
  }
}
