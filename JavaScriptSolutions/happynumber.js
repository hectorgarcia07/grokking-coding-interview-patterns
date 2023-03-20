function calculateSum(n){
    let number = n
    let sum = 0

    while (number > 0){
        let lastDigit = number % 10
        sum = sum + lastDigit ** 2
        number = Math.floor( number / 10 )
    }
    
    return sum
}

function isHappyNumber(n){
    let slow = n
    let fast = calculateSum(n)

    while( fast !== 1 && slow !== fast ){
        slow = calculateSum(slow)
        fast = calculateSum(calculateSum(fast))
    }

    console.log("fast", fast, "slow", slow)

    return fast === 1;
}

console.log(isHappyNumber(23))