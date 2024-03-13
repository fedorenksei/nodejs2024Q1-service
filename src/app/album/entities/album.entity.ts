import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class Album {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  year: number;

  @IsString()
  @IsOptional()
  artistId: string | null;
}
