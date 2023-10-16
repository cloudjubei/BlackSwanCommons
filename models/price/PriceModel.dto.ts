import { ApiProperty } from "@nestjs/swagger"
import { Timestamp } from "../swagger.consts"

export default class PriceModel
{
    @ApiProperty() tokenPair: string
    @ApiProperty() interval: string
    @ApiProperty() price: string = "0"
    @ApiProperty(Timestamp) timestamp: number = 0

    constructor(tokenPair: string, interval: string, price: string = "0", timestamp: number = 0)
    {
        this.tokenPair = tokenPair
        this.interval = interval
        this.price = price
        this.timestamp = timestamp
    }
}