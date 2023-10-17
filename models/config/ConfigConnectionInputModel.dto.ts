
export default class ConfigConnectionInputModel
{
    host: string
    port: number

    constructor(host: string, port: number){
        this.host = host
        this.port = port
    }
}
export class ConfigConnectionInputModelUtils
{
    static GetUrl(m: ConfigConnectionInputModel) : string
    {
        return m.host + ':' + m.port
    }
}