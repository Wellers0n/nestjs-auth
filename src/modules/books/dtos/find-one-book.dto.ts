import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindOneBookParamDTO {
  @ApiProperty()
  @IsNotEmpty()
  id: number;
}

export class FindOneBookDataDTO {
  id: number;
}
