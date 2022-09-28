import { CreateUserDto, UserLoginDto } from './dto/createUser.dto'
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './User.service';

@Controller('User')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.UserService.create(createUserDto);
  }

  @Post('signin')
  login(@Body() UserLoginDto: UserLoginDto) {
    return this.UserService.login(UserLoginDto);
  }

  @Get('find/:personal_id')
  findOne(@Param('personal_id') personal_id: string) {
    return this.UserService.findOne(personal_id);
  }

  @Get('find')
  findAll() {
    return this.UserService.findAll();
  }
}
