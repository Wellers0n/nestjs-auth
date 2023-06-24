import { ApiProperty } from '@nestjs/swagger';

export class LoginNotAuthorizedResponseDTO {
  @ApiProperty()
  message: string;

  @ApiProperty()
  status_code: number;
}
