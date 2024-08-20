import {ListNode} from './linkedlist.mjs'
import {removeKthLast} from './solution.mjs'

// Helper function to create a linked list from an array
function createList(arr) {
    let head = null;
    let tail = null;
    for (let value of arr) {
        let newNode = new ListNode(value);
        if (head === null) {
            head = newNode;
            tail = head;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }
    return head;
}

// Helper function to print the linked list
function printList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// Test case: Removing 5th last element
let list = createList([1, 2, 3, 4, 5, 6, 7]);
console.log("Original List:");
printList(list);

list = removeKthLast(list, 2);
console.log("After Removing 5th Last Element:");
printList(list);
