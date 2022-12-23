var maxProfit = function(prices) {
    let max = 0
    let min = Infinity
    
    for(let i = 0, len = prices.length; i < len; i++){
        //save the minimum price
        if(prices[i] < min){
            min = prices[i]
        }
        //if the diffrence greater than the max
        //then that's the biggest profit
        else if(prices[i] - min > max){
            max = prices[i] - min
        }
    }

    return max
};