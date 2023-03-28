export function detectCycle(head){
    let p1 = head
    let p2 = head.next

    //find where the two pointers meet
    while(p2 !== null && p1 !== p2){
        //move p1 one step and p2 two steps
        p1 = p1.next
        
        //move once
        p2 = p2.next

        if(p2 === null){
            return false
        }

        p2 = p2.next

        if(p2 === null){
            return false
        }
    }

    //once pointers meet, reset p1 to head
    p1 = head

    //loop until pointers meet at intersection
    while(p1 !== p2){
        //move p1 one step and p2 two steps
        p1 = p1.next
        
        //move once
        p2 = p2.next
        p2 = p2.next
    }

    if(p1 == p2){
        return true
    }
    return false
}