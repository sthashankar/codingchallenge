export class Node {
    value: number;
    next?: Node;

    constructor(value: number, next?: Node) {
        this.value = value;
        this.next = next;
    }

    getNext(): Node | undefined {
        return this.next;
    }

    getValue(): number {
        return this.value;
    }
}

function dfs(node: Node, node2: Node): [Node, Node] | undefined {
    const stack1: Node[] = [node];
    const stack2: Node[] = [node2];

    while (stack1.length > 0) {
        const current1:Node = stack1.pop()!; // non-null assertion
        const current2:Node = stack2.pop()!;

        if (current1.getValue() === current2.getValue() && current1.getNext().getValue() === current2.getNext().getValue()) {
            return [current1, current2];
        }

        stack1.push(current1.getNext()!); // non-null assertion
        stack2.push(current2.getNext()!);
    }

    return undefined;
}

const node = new Node(
    3,
    new Node(
        7,
        new Node(
            8,
            new Node(10)))
)

const node2 = new Node(
    99,
    new Node(
        1,
        new Node(
            8,
            new Node(10)))
)

dfs(node, node2);




