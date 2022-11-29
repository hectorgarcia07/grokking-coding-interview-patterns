export function findMaxSlidingWindow(nums, windowSize) {

    //method used to pop all elements that are smaller that current viewed item
    //then item is pushed where it belongs
    const arangeLargest = (nums, window, i) => {
        while(window.length && nums[i] > nums[window[window.length - 1]] ){
            window.pop()
        }
        window.push(i)
    }

    const window = [] //will hold the largest element in descending order
    const result = [] //will hold the result to return 
    let windowCounter = 0 //counter that is only used initially to get the largest number that is bounded by the window size

    //used as a way to prevent the windowSize from being larger than the nums array length
    if(windowSize > nums.length){
        windowSize = nums.length
    }


    for(let i = 0, len = nums.length; i < len; i++){
        
        if(windowCounter < windowSize){
            //initially first find the first largest number that falls between 0 - windowSize-1.
            arangeLargest(nums, window, i)
            windowCounter++
        }
        else{
            //once windowCounter is greater than window size, add the largest element from 
            //the window and add it to result
            result.push(nums[window[0]])

            //then check to see if the greater index still falls within the windowSize bound, 
            //if not, pop the front (which is the largest)
            if((i - windowSize + 1) > window[0] ){
                window.shift()
            }

            //add the current viewed element to it's respective spot
            arangeLargest(nums, window, i)
        }
    }

    //the last itteration, the last largest element isn't added so it's added here.
    result.push(nums[window[0]])

    //return the result
    return result
}