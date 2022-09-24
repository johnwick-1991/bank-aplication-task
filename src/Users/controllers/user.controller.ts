import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { CreateUserDto } from './usermodule/dto/createUser.dto';
import  {UserService}  from  'src/services/users/user.service'

@Controller('signup')
export class UserController {

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() CreateUserDto:CreateUserDto){
        console.log(CreateUserDto)
        
    }

}
