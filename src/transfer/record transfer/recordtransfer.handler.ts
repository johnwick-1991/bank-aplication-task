import { Inject } from "@nestjs/common";
import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { TransferRepo } from "../transfer.Repository";
import { TransferRepoToken } from "../transferRepo.token";
import { RecordTransferCommand } from "./record-transfer.command";
import { RecordedTransfer } from "./recorded-transfers.event";
import * as uuid from 'uuid';
import { TransferEntity } from "../transfer.Entity";


@CommandHandler(RecordedTransfer)
export class RecordTransferHandler implements ICommandHandler<RecordTransferCommand>{

    constructor(
        @Inject(TransferRepoToken)
        private readonly TransferRepo: TransferRepo,
        private readonly eventBus:EventBus
       
    ){}
     async execute(command: RecordTransferCommand): Promise<any> {

        const id = uuid.v4();
        const transfer = new TransferEntity(
            id,
            command.amount,
            command.originId,
            command.targetCurrency,
            command.originCurrency,
            command.targetId,
            );
         await this.TransferRepo.save(transfer)
         this.eventBus.publish(new RecordedTransfer(id));
         return id;
     }
}