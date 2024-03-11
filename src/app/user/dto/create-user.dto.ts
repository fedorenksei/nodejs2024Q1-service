import { OmitType, IntersectionType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';

class WithPassword {
  password: string;
}

export class CreateUserDto extends IntersectionType(
  OmitType(User, ['id']),
  WithPassword,
) {}
