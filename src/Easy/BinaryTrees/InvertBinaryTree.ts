import { TreeNode } from "../../Utils/TreeNode";
import { breadthFirstSearch } from "../../Utils/breadthFirstSearch";
// Given the root node of a binary tree
// invert the tree and return its root

const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) {
    return null;
  }
  return root;
};

// test cases:
const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
console.log(breadthFirstSearch(root1)); // [2,1,3]

const root2 = new TreeNode(4);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(1);
root2.left.right = new TreeNode(3);
root2.right = new TreeNode(7);
root2.right.left = new TreeNode(6);
root2.right.right = new TreeNode(9);
console.log(breadthFirstSearch(root2)); // [4,2,7,1,3,6,9]
