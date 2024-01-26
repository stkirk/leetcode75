import { TreeNode } from "./TreeNode";

export const breadthFirstSearch = (root: TreeNode): number[] => {
  const queue: TreeNode[] = [];
  const orderedNodeValues: number[] = [];
  queue.push(root);

  while (queue.length > 0) {
    // pop left from queue
    const curNode = queue.shift();
    if (curNode) {
      // log the value
      orderedNodeValues.push(curNode!.val);
      // add left and/or right nodes to queue
      if (curNode.left) {
        queue.push(curNode!.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
  }
  return orderedNodeValues;
};
