import { TreeNode } from "./TreeNode";

export const convertBinaryTreeToArray = (root: TreeNode): any[] => {
  const orderedTreeNodes: any[] = [];

  function helper(node: TreeNode): void {
    orderedTreeNodes.push(node.val);
    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
  }
  helper(root);
  return orderedTreeNodes;
};
