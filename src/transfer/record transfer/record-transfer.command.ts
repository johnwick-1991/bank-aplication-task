import { Currency } from "../../currency";

export class RecordTransferCommand{

    constructor (
        readonly amount: number,
        readonly originCurrency: Currency,
        readonly targetCurrency: Currency,
        readonly originId :string,
        readonly targetId: number,
    ){}
}