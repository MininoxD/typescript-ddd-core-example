import { Controller, Post, UsePipes, Body } from '@nestjs/common'
import { UserLogin } from '../../../../contexts/ecommerce/users/application/UserLogin'
import { ZodValidationPipe } from '../../validator/zodValidationPipe'
import { UserLoginParametersSchema } from '../schemas/userLoginParametersSchema'
import { UserLoginParameters } from '../types/userParameter'

@Controller('users')
export class UserPostController {
  constructor(private userLogin: UserLogin) {}

  @Post('/login')
  @UsePipes(new ZodValidationPipe(UserLoginParametersSchema))
  async login(@Body() body: UserLoginParameters): Promise<void> {
    await this.userLogin.run(body)
  }
}
