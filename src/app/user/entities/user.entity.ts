import { IsString, IsUUID } from 'class-validator';

export class User {
  @IsUUID()
  id: string;

  @IsString()
  login: string;
}
