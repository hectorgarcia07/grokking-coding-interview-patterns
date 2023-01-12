function reverseWords(sentence) {
    const splitWord = sentence.split(' ').filter( word => word.length )
    console.log(splitWord)
    let i = 0
    let j = splitWord.length - 1

    while(i < j){
        let temp = splitWord[i]
        
        splitWord[i] = splitWord[j]
        splitWord[j] = temp

        i++
        j--
    }


    return splitWord.join(' ')
}

console.log(reverseWords("We love Python"))