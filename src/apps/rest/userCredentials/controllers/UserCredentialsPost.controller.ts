import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes
} from '@nestjs/common'
import { UserCredentialsVerifyToken } from '../../../../contexts/ecommerce/userCredentials/application/UserCredentialsVerifyToken'
import { ZodValidationPipe } from '../../validator/zodValidationPipe'
import { UserCredentialsVerifyParametersSchema } from '../schemas/userCredentialsVerifyParametersSchema'
import { UserCredentialsVerifyParameters } from '../types/userCredentialsParameters'

@Controller('users')
export class UserCredentialsPostController {
  constructor(private userCredentialsVerifyToken: UserCredentialsVerifyToken) {}

  @Post('verifyToken')
  @UsePipes(new ZodValidationPipe(UserCredentialsVerifyParametersSchema))
  @HttpCode(HttpStatus.OK)
  async verifyToken(@Body() parameter: UserCredentialsVerifyParameters) {
    await this.userCredentialsVerifyToken.run(parameter)
  }
}
