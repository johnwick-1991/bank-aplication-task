import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { dbConnection } from "./dbConnection";
import { TransferEntity } from "./transfer.Entity";
import { TransferRepo } from "./transfer.Repository";

@Injectable()
export class TypeOrmTransferRepo implements TransferRepo{
 constructor(
    @InjectRepository(TransferEntity, dbConnection)
    private readonly repository: Repository<TransferEntity>
 ){}
  async save(transfer: TransferEntity): Promise<void> {
    await this.repository.save(transfer)
    return;
      
  }
}