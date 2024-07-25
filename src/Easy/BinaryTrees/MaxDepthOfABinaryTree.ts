// Given the root node of a binary tree:
// return its maximum depth

import { TreeNode } from "../../Utils/TreeNode";

function maxDepthDFS(root: TreeNode): number {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(maxDepthDFS(root.left!), maxDepthDFS(root.right!));
}

// BFS using a queue
function maxDepthBFS(root: TreeNode): number {
  if (!root) {
    return 0;
  }
  let depth = 0;
  const queue = [root];
  // while as long as nodes are in the queue
  while (queue.length) {
    const levelSize = queue.length;
    // pop from front of queue, could be multiple nodes per level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      // add left and right nodes if they exist
      if (node && node.left) {
        queue.push(node.left);
      }
      if (node && node.right) {
        queue.push(node.right);
      }
    }
    // increment depth
    depth += 1;
  }
  return depth;
}
