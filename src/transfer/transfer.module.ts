import {  CqrsModule, } from '@nestjs/cqrs'
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferEntity } from './transfer.Entity';
import { dbConnection } from './dbConnection';
import { TransferRepoToken } from './transferRepo.token';
import { RecordTransferHandler } from './record transfer/recordtransfer.handler';
import { TypeOrmTransferRepo } from './typeOrmtransfer.repository';

const Commands =[RecordTransferHandler]

@Module({
    imports: [
        CqrsModule, 
        TypeOrmModule.forFeature([TransferEntity], dbConnection)
    ],
    providers:[{
        provide: TransferRepoToken,
        useClass :TypeOrmTransferRepo
},
...Commands,]
})
export class TransferModule{}

