import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { Inject, UsePipes } from '@nestjs/common/decorators';
import { UserService } from 'src/services/users/user.service';
import { CreateUserDto } from './usermodule/dto/createUser.dto';


@Controller('signup')
export class UserController {
    constructor(@Inject() private readonly userService: UserService){}

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() CreateUserDto:CreateUserDto){
        return this.userService.createUser(CreateUserDto)
    }

}
