export function removeKthLast(head, k) {
    let first = head;
    let second = head;

    // Move `first` pointer k steps ahead
    // This ensures the second pointer will always be Kth step back. When first pointer reached to Kth step, the second pointer will be before the element to be removed
    for (let i = 0; i < k; i++) {
        if (first === null) {
            // If k is larger than the length of the list, return the original list
            return head;
        }
        first = first.next;
    }

    // Edge case: if the list is to be shortened by removing the head
    if (first === null) {
        return head.next;
    }

    // Move both pointers until `first` reaches the end of the list
    while (first.next !== null) {
        first = first.next;
        second = second.next;
    }

    // Remove the k-th last node
    second.next = second.next.next;

    return head;
}