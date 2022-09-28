import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './User.controller';
import { User } from './model/User.entity'
import { UserService } from './User.service'

@Module({
  imports: [TypeOrmModule.forFeature([User, User])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
