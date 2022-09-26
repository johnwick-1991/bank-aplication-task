import { User } from '../typeorm/User';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperatorController } from './operator.controller';
// import { UsersService } from './operator.service';
// import { OperatorController } from './operator.controller';
import { Operator } from './model/operator.entity';
import { OperatorService } from './operator.service';

@Module({
  imports: [TypeOrmModule.forFeature([Operator, User])],
  providers: [OperatorService],
  controllers: [OperatorController],
})
export class OperatorModule {}
