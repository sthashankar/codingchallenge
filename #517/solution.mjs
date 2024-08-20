export function dfs(node, node2) {
    const stack1 = [node];
    const stack2 = [node2];

    while (stack1.length > 0) {
        const current1 = stack1.pop();
        const current2 = stack2.pop();

        if (current1 === undefined && current1 === current2) {
            return [null, null]
        }

        if (current1.getValue() === current2.getValue() && current1.getNext().getValue() === current2.getNext().getValue()) {
            return [current1, current2];
        }

        stack1.push(current1.getNext());
        stack2.push(current2.getNext());
    }
}