import { ApiProperty } from "@nestjs/swagger"
import { Timestamp } from "../swagger.consts"

export default class SignalModel
{
    @ApiProperty() tokenPair: string
    @ApiProperty() interval: string
    @ApiProperty(Timestamp) timestamp: number
    @ApiProperty() action: number
    @ApiProperty() certainty: number = 1.0 // percentage

    constructor(tokenPair: string, interval: string, timestamp: number, action: number, certainty: number = 1.0)
    {
        this.tokenPair = tokenPair
        this.interval = interval
        this.timestamp = timestamp
        this.action = action
        this.certainty = certainty
    }
}