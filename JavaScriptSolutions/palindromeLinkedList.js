function palindrome(head){
    let slow = head, fast = head

    while( fast.next !== null ){
        slow = slow.next
        fast = fast.next.next

        if(fast === null)
            break
    }

    console.log(slow.data)

    //reverse link list starting at the middle
    let reverse = null, next = slow, ptr = slow

    while(next !== null){
        next = next.next
        ptr.next = reverse
        reverse = ptr
        ptr = next
    }
    let start = head

    while(start !== slow){
        if( start.data !== reverse.data )
            return false
        
        start = start.next
        reverse = reverse.next
    }


    return reverse == null || start.data == reverse.data

}