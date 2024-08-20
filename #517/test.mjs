import {dfs} from "./solution.mjs";
import {ListNode} from "./node.mjs";

const node = new ListNode(3, new ListNode(7, new ListNode(9, new ListNode(12))));
const node2 = new ListNode(99, new ListNode(7, new ListNode(9, new ListNode(10))));

const [result1, result2] = dfs(node, node2);
if (result1===null && result1 === result2) {
    console.log("Equal node not found");
}else{
    console.log("first node: "+result1.getValue()+" second node: "+result2.getValue());
}
