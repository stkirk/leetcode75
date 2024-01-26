import { TreeNode } from "../../Utils/TreeNode";
import { breadthFirstSearch } from "../../Utils/breadthFirstSearch";
// Given the root node of a binary tree
// invert the tree and return its root

const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) {
    return null;
  }
  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length > 0) {
    // get node at start of queue
    const curNode: TreeNode | undefined = queue.shift();
    // make ts compiler happy
    if (!curNode) {
      continue;
    }
    // flip left and right nodes
    if (curNode.left && curNode.right) {
      let temp;
      temp = curNode.left;
      curNode.left = curNode.right;
      curNode.right = temp;
      queue.push(curNode.left);
      queue.push(curNode.right);
    } else if (curNode.right) {
      curNode.left = curNode.right;
      curNode.right = null;
      queue.push(curNode.left);
    } else if (curNode.left) {
      curNode.right = curNode.left;
      curNode.left = null;
      queue.push(curNode.right);
    }
  }
  return root;
};

// test cases:
const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
console.log(breadthFirstSearch(root1)); // [2,1,3]
invertTree(root1);
console.log("inverted", breadthFirstSearch(root1)); // [2,3,1]

const root2 = new TreeNode(4);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(1);
root2.left.right = new TreeNode(3);
root2.right = new TreeNode(7);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(9);
console.log(breadthFirstSearch(root2)); // [4,2,7,1,3,6,9]
invertTree(root2);
console.log("inverted ", breadthFirstSearch(root2)); // [4,7,2,9,6,3,1]
