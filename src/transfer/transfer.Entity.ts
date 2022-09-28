import { Column, Entity, PrimaryColumn } from 'typeorm'
import { Currency } from '../currency'

@Entity()
export class TransferEntity{
    @PrimaryColumn('uuid')
    id:string;

    @Column('timestamp')
    timestamp:Date;

    @Column('int')
    amount:number;

    @Column({length:'3'})
    originCurrency:Currency;

    @Column({length:'3'})
    targetCurrency: Currency;

    @Column('uuid')
    originId: string;

    @Column('uuid')
    targetId: string;


    constructor(
        id:string,
        amount:number,
        originCurrency:Currency,
        targetCurrency: Currency,
        originId: string,
        targetId: string,
    ){
        this.id = id;
        this.amount = amount;
        this.originCurrency= originCurrency;
        this.targetCurrency= targetCurrency;
        this.originId = originId;
        this.targetId= targetId;
        this.timestamp =new Date();
    }
}