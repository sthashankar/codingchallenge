class Node {
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

function dfs(node, node2) {
    const stack1 = [node];
    const stack2 = [node2];

    while (stack1.length > 0) {
        const current1 = stack1.pop();
        const current2 = stack2.pop();

        if (current1.getValue() === current2.getValue() && current1.getNext().getValue() === current2.getNext().getValue()) {
            return [current1, current2];
        }

        stack1.push(current1.getNext());
        stack2.push(current2.getNext());
    }
}

const node = new Node(3, new Node(7, new Node(8, new Node(10))));
const node2 = new Node(99, new Node(1, new Node(8, new Node(10))));

const [result1, result2] = dfs(node, node2);
console.log("first node: "+result1.getValue()+" second node: "+result2.getValue());