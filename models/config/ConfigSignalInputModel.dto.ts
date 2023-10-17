import ConfigConnectionInputModel from "./ConfigConnectionInputModel.dto"

export default class ConfigSignalInputModel extends ConfigConnectionInputModel
{
    tokens: string[]
    intervals: string[]

    constructor(host: string, port: number, tokens: string[], intervals: string[]){
        super(host, port)
        this.tokens = tokens
        this.intervals = intervals
    }
}