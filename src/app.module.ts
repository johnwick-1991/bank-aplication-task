import { Module } from '@nestjs/common';
import { Usersmodule } from './Users/controllers/usermodule/user.module';
import { UserController } from './Users/controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm/index';

@Module({
  imports: [
    Usersmodule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@@karlito1991@@',
      database: 'bankappusers',
      entities,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
