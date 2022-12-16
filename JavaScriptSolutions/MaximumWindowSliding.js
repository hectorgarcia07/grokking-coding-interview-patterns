function minWindow(s, t) {
    const t_map = new Map()
    const window = new Map()
    const t_array = t.split('')
    const s_array = s.split('')
    let p1 = null
    let window_count;
    let current_count = 0
    let substr_len = Infinity
    let start = null
    let end = null
    
    //it creates map of each char in string t
    t_array.forEach(char => {
        if(t_map.has(char)){
            t_map.set(char, t_map.get(char) + 1 )
        }
        else{
            t_map.set(char, 1 )
        }
        window.set(char, 0)
    })

    window_count = window.size

    for(let i = 0, len = s.length; i < len; i++){
        //if the char seen is part of t add it and check to see if you need to pop stuff
        //otherwise, increase p1 since it doesn't belong in the substring
        if( window.has(s_array[i]) ){
            //add it to the window
            window.set(s_array[i], window.get(s_array[i]) + 1 )

            if(p1 == null){
                p1 = i
            }
            //increment the value if it equal to the required char's in the window map
            if( window.get(s_array[i]) == t_map.get(s_array[i]) ){
                current_count++
            }

            //if window count is equal to current_count, then 
            if(window_count === current_count){
                //check to see if substring lengnth is less than the current length
                //if so, save it as the shortest substring
                if( (i - p1) < substr_len ){
                    start = p1
                    end = i
                    substr_len = i - p1
                }

                //remove left most char and find the shortest substring
                //until the current_length is less than window_count
                while(window_count == current_count && p1 <= i){
                    //if the char that is to be removed belongs to the 
                    //t_map, update the current_count - 1. Otherwise, get the new substr & update the substr index's
                    if(window.has(s_array[p1])){
                        window.set(s_array[p1], window.get(s_array[p1]) - 1  )

                        if(window.get(s_array[p1]) < t_map.get(s_array[p1]) ){
                            current_count--
                        }
                    }

                    if( (i - p1) < substr_len ){
                        substr_len = i - p1
                        start = p1
                        end = i
                    }

                    p1++
                }
            }
        }
        
    }

    return substr_len === Infinity ? '' : s.substring(start, end + 1)
}

console.log(minWindow("PATTERN" , "TN"))