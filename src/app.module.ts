import { OperatorModule } from './operator/operator.module';
import { Module } from '@nestjs/common';
import { UserModule } from './Users/User.module';
import { TransferModule } from './transfer/transfer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm/index';


@Module({
  imports: [
    UserModule,
    OperatorModule,
    TransferModule,
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
