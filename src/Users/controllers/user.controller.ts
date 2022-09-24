import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {  UsePipes } from '@nestjs/common/decorators';
import { UserService } from 'src/services/users/user.service';
import { CreateUserDto } from './usermodule/dto/createUser.dto';


@Controller('signup')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() CreateUserDto:CreateUserDto){
        return this.userService.createUser(CreateUserDto)
    }

}
