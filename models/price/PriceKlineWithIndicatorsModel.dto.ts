import { ApiProperty } from "@nestjs/swagger"
import PriceKlineModel from "./PriceKlineModel.dto"

export default class PriceKlineWithIndicatorsModel extends PriceKlineModel
{
    @ApiProperty() indicators: { [id:string] : string }
}