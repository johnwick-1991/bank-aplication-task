import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { User } from 'src/typeorm';
import { CreateUserDto } from 'src/Users/controllers/usermodule/dto/createUser.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    createUser(createUserDto:CreateUserDto){
        const newUser= this.userRepository.create({
            email:''
        })
    }
    

}