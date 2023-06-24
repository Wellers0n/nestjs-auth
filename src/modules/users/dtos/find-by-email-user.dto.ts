import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindByEmailUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  email: string;
}
