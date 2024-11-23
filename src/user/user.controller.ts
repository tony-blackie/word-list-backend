import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser(): Promise<string> {
    const users = await this.userService.getUser();
    return JSON.stringify(users);
  }
}
