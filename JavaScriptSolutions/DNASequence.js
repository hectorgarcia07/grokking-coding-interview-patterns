function findRepeatedSequences(s, k) {
    const result = []
    const window = s.length - k + 1
    const set = new Set()

    if(s.length < k){
        return result
    }

    for(let i = 0; i < window; i++){
        let str = s.substring(i, k + i)

        if(set.has(str)){
            if(!result.find(arrStr => str == arrStr))
            {
                result.push(str)
                set.delete(str)
            }
        }
        else{
            set.add(str)
        }
    }
    console.log(result)
    return result
}

findRepeatedSequences("GGGGGGGGGGGGGGGGGGGGGGGGG", 12)