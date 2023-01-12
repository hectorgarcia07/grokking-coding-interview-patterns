function findSumOfThree(nums, target) {
    nums.sort(( a, b ) => a - b )
    console.log(nums)
    let len = nums.length
    let newTarget = 0

    for(let i = 0; i < len; i++){
        //the new target 
        newTarget = target - nums[i]
        console.log(newTarget)
        let j = i + 1
        let k = len - 1
        
        while(j < k){
            if((nums[j] + nums[k]) == newTarget)return true
            else if((nums[j] + nums[k]) > newTarget ) k--
            else j++
        }
    }

    return false
}

console.log(findSumOfThree([-1, 2, 1, -4, 5, -3] , -8))