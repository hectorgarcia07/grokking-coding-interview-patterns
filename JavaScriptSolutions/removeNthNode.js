function removeNthLastNode(head, n) {
    let left = head
    let right = head
    let temp = null
    
    //move the right pointer n times
    for(let i = 0; i < n; i++){
        right = right.next
    }

    //move each pointer by 1 until right.next is null
    while(right != null && right.next != null){
        left = left.next
        right = right.next
    }
    
    //if left is equal to head move the head one node to the left
    if(left == head){
        head = left.next
        left.next = null
    }
    else{
        //otherwise unlink the nth node
        temp = left.next
        left.next = left.next.next
        temp.next = null
    }

    return head;  
}