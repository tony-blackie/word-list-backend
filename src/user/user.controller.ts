import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/schema/User';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser(): Promise<string> {
    const users = await this.userService.getUser();
    return JSON.stringify(users);
  }

  @Post()
  async createUser(@Body() user: User): Promise<string> {
    const newUser = await this.userService.createUser(user);
    return JSON.stringify(newUser);
  }
}
