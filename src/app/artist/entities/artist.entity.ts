import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class Artist {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsBoolean()
  grammy: boolean;
}
