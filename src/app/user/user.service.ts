import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { db } from 'src/db';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    const user = db.user.create(createUserDto);
    delete user.password;
    return user;
  }

  findAll() {
    return db.user.findAll().map((user) => {
      delete user.password;
      return user;
    });
  }

  findOne(id: string) {
    const user = db.user.findOne(id);
    if (!user) return;
    const userResource = { ...user };
    delete userResource.password;
    return userResource;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = db.user.update(id, updateUserDto);
    delete user.password;
    return user;
  }

  remove(id: string) {
    db.user.remove(id);
  }
}
