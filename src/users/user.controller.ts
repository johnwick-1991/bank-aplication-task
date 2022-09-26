import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { UserService } from 'src/users/user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
