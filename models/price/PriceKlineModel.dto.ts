import { ApiProperty } from "@nestjs/swagger"
import PriceModel from "./PriceModel.dto"
import { Timestamp } from "../swagger.consts"

export default class PriceKlineModel extends PriceModel
{
    @ApiProperty(Timestamp) timestamp_close: number = 0
    @ApiProperty() price_open: string = "0"
    @ApiProperty() price_low: string = "0"
    @ApiProperty() price_high: string = "0"
    @ApiProperty() volume: string = "0"
    @ApiProperty() trades_number: string = "0"
    @ApiProperty() asset_volume_quote: string = "0"
    @ApiProperty() asset_volume_taker_base: string = "0"
    @ApiProperty() asset_volume_taker_quote: string = "0"
}