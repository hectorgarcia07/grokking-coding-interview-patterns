function minWindow(str1, str2) {
   let str1Len = str1.length, str2Len = str2.length
   let index1 = 0, index2 = 0
   let start = 0, end = 0
   let length = Infinity
   let subStr = ''

   //loop while all the characters are seen
    while(index1 < str1Len){
        //if the character that is being viewed matches the char from str2
        //increment pointers 
        if(str1[index1] == str2[index2]){
            index2++

            if(str2Len == index2){
                end = index1 + 1
                start = index1
                index2--

                while(index2 >= 0){
                    if(str1[start] == str2[index2]){
                        index2--
                    }
                    start--
                }
                //calculate the substring and save it only if its the current
                //smallest
                if((end - start) - 1 < length){
                    length = end - start - 1
                    subStr = str1.substring(start + 1, end)
                }

                //continue and find the next possible substring in the list
                index2 = 0
                index1 = start + 1
            }
        }
        index1++
    }

    console.log(subStr == 'kzxwqegknd')
}

minWindow('fgrqsqsnodwmxzkzxwqegkndaa', 'kzed')