function parse(rawArrs) {

    const len = rawArrs.length

    const result = {
        args: [],
        options: {

        }
    } 

    for (let i = 0; i < len; i++) {
        const val = rawArrs[i];
        if (val.startsWith("--")) {
            const key = val.substring(2)
            console.log("-----------",key);
            
            const nextVal = rawArrs[++i]
            result.options[key] = nextVal
        }else{
            result.args.push(val)
        }
    }

    return result
}

console.log(parse([
    "--type",
    "foo",
    "bar"
  ]));