import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { db } from 'src/db';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    const user = db.user.create(createUserDto);
    const userResource = { ...user };
    delete userResource.password;
    return userResource;
  }

  findAll() {
    return db.user.findAll().map((user) => {
      const userResource = { ...user };
      delete userResource.password;
      return userResource;
    });
  }

  findOne(id: string) {
    const user = db.user.findOne(id);
    if (!user) return;
    const userResource = { ...user };
    delete userResource.password;
    return userResource;
  }

  updatePassword(id: string, updateUserPasswordDto: UpdateUserPasswordDto) {
    const result = db.user.updatePassword(id, updateUserPasswordDto);
    if (result === 'not-found') throw new NotFoundException();
    if (result === 'wrong-password') throw new ForbiddenException();
    const userResource = { ...result };
    delete userResource.password;
    return userResource;
  }

  remove(id: string) {
    return db.user.remove(id);
  }
}
