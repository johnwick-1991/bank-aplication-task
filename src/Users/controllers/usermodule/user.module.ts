import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../../../typeorm/User'
import { UserController} from '../user.controller';
import { UserService} from 'src/services/users/user.service';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    // controllers:[UserController],
    // providers:[{
    //     provide:'userservice',
    //     useClass: UserService
// }]
      
})
export class Usersmodule{}
