import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserPasswordDto {
  @IsString()
  oldPassword: string;
  @IsString()
  newPassword: string;
}
