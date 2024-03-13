import { OmitType, IntersectionType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';
import { IsString } from 'class-validator';

class WithPassword {
  @IsString()
  password: string;
}

export class CreateUserDto extends IntersectionType(
  OmitType(User, ['id']),
  WithPassword,
) {}
