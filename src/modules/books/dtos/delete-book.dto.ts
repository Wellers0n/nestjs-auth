import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DeleteBookParamDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class DeleteBookDataDTO {
  id: number;
}
