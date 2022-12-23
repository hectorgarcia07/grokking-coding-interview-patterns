function minSubArraylen(target, nums) {
    let sum = 0
    let min = Infinity
    let window = 0
    let start = 0

    //itterate over all number
    for(let i = 0, len = nums.length; i < len; i++){
        sum += nums[i]//add current number to the sum and increase window
        window++

        //while sum is greater than targer, find the smallest window where 
        //the condition fails then that's the 
        while( sum >= target){
            if( sum >= target ){
                //update the window size based on the if it's smalles
                min = window < min ? window : min
            }
            sum -= nums[start]
            window--
            start++
        }
    }

    return min == Infinity ? 0 : min
}