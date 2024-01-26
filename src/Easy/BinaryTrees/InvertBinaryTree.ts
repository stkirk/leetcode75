import { TreeNode } from "../../Utils/TreeNode";
import { convertBinaryTreeToArray } from "../../Utils/convertBinaryTreeToArray";
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
console.log(convertBinaryTreeToArray(root1)); // [2,1,3]
