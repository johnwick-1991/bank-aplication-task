import { TransferEntity } from "./transfer.Entity";

export interface TransferRepo{
    save(transfer: TransferEntity):Promise<void>
}