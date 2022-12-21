const longestSubStr = (s) => {
    let start = 0
    let curr_len = 0
    let max = 0
    let map = {}
    let i 
    for(i = 0, len = s.length; i < len; i++){
        //if the char is not in the map, then add it to keep track of it
        if(!(s[i] in map)){
            map[s[i]] = i
            curr_len++
        }
        else{
            //if the char is in the map, check to see if its the
            //'longest' string and update it. Then adjust the 
            // start variable
            if( map[s[i]] >= start ){
                curr_len = i - start
                if(max < curr_len){
                    max = curr_len
                }

                start = map[s[i]] + 1
                map[s[i]] = i
            }
            map[s[i]] = i

        }
    }

    return max < (i - start) ? i - start : max
}

console.log(longestSubStr('hkcpmprxxxqw'))