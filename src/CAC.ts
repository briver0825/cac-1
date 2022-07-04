class CAC{
    parse(rawArrs: string[]) {

        const len = rawArrs.length
    
        const result: { args: string[], options: { string: string } | {} } = {
            args: [],
            options: {}
        }
    
        for (let i = 0; i < len; i++) {
            const val = rawArrs[i];
            if (val.startsWith("--")) {
                const key = val.substring(2)
                const nextVal = rawArrs[++i]
                result.options[key] = nextVal
            } else {
                result.args.push(val)
            }
        }
    
        return result
    }
}

export default CAC