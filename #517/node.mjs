export class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

    getNext() {
        return this.next;
    }

    getValue() {
        return this.value;
    }
}