import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDTO {
  @ApiProperty()
  message: string;

  @ApiProperty()
  access_token: string;
}
