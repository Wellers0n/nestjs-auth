import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindByEmailDTO {
  @ApiProperty()
  @IsNotEmpty()
  email: string;
}
