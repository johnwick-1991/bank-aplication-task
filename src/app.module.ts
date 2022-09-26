import { OperatorModule } from './operator/operator.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { UserController } from './users/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm/index';

@Module({
  imports: [
    UsersModule,
    OperatorModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'adamiani123',
      database: 'bankappusers',
      entities,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
