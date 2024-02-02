import { TreeNode } from "../../Utils/TreeNode";
// Given a BST find the lowest common ancestor of two given nodes, p & q, in the BST
// LCA is the lowest node in the tree where both p and q are descendants

const getLowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null => {
  // init visited nodes for traversal to p and to record ancestor nodes
  const pAncestors: TreeNode[] = [];
  const qAncestors: TreeNode[] = [];

  if (!root || !p || !q) {
    return null;
  }

  let queue: TreeNode[] = [root];
  // while loop until find p, recording ancestor nodes for each iteration
  while (queue.length) {
    const curNode = queue.shift();
    if (curNode) {
      // add curNode to ancestors and if we found target node, break
      pAncestors.push(curNode);
      if (curNode.val === p.val) {
        break;
      }
      // check left and right to see what to push onto queue
      const left = curNode.left;
      const right = curNode.right;
      // if p.val < curNode.val go left
      if (left && p.val < curNode.val) {
        queue.push(left);
      } else if (right) {
        queue.push(right);
      }
    }
  }
  console.log(
    "pAncestors:",
    pAncestors.map((node) => node.val)
  );
  // search for q, check nodes against pAncestors each iteration to find a match
  queue.push(root);
  while (queue.length) {
    const curNode = queue.shift();
    if (curNode) {
      // add curNode to ancestors and if we found target node, break
      qAncestors.push(curNode);
      if (curNode.val === q.val) {
        break;
      }
      // check left and right to see what to push onto queue
      const left = curNode.left;
      const right = curNode.right;
      // if q.val < curNode.val go left
      if (left && q.val < curNode.val) {
        queue.push(left);
      } else if (right) {
        queue.push(right);
      }
    }
  }
  console.log(
    "qAncestors:",
    qAncestors.map((node) => node.val)
  );
  // find intersection of both ancestor lists, return last index
  const intersection = pAncestors.filter((node) => qAncestors.includes(node));
  return intersection[intersection.length - 1] || null;
};

const r1 = new TreeNode(6);
const p1 = new TreeNode(2);
r1.left = p1;
r1.left.left = new TreeNode(0);
const q2 = new TreeNode(4);
r1.left.right = q2;
r1.left.right.right = new TreeNode(5);
r1.left.right.left = new TreeNode(3);
const q1 = new TreeNode(8);
r1.right = q1;
r1.right.left = new TreeNode(7);
r1.right.right = new TreeNode(9);
console.log("LCA", getLowestCommonAncestor(r1, p1, q1));
console.log("LCA", getLowestCommonAncestor(r1, p1, q2));
