export default class ACache<T>
{
    protected cache : { [key:string] : { [internalKey:string] : T[] }} = {}
    protected cacheSize = 10

    setup(keys: string[], internalKeys: string[], cacheSize: number)
    {
        this.cacheSize = cacheSize
        for(const key of keys){
            this.cache[key] = {}
            for(const internalKey of internalKeys){
                this.cache[key][internalKey] = []
            }
        }
    }
    setupValues(key: string, internalKey: string, values: T[])
    {
        this.cache[key][internalKey] = values.reverse()
    }

    store(key: string, internalKey: string, value: T)
    {
        this.cache[key][internalKey] = [value, ...this.cache[key][internalKey]]
        if (this.cache[key][internalKey].length > this.cacheSize){
            this.cache[key][internalKey].pop()
        }
    }

    getAllKeys() : string[]
    {
        return Object.keys(this.cache)
    }
    getAllInternalKeys(key: string) : string[]
    {
        return Object.keys(this.cache[key])
    }
    getAll(key: string, internalKey: string) : T[]
    {
        if (!this.cache[key]){ return [] }

        return this.cache[key][internalKey] ?? []
    }

    getLatest(key: string, internalKey: string) : T | undefined
    {
        if (!this.cache[key]){ return undefined }

        const values = this.cache[key][internalKey]
        if (values.length > 0){
            return values[0]
        }
        return undefined
    }
}
