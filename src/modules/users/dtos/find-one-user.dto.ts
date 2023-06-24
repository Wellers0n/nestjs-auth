import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindOneUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}
