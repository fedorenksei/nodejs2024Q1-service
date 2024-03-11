import { IsUUID } from 'class-validator';

export class ParamsWithId {
  @IsUUID(4)
  id: string;
}
