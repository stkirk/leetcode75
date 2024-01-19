import { ListNode } from "./ListNode";

// returns head of new linked list
export const createLinkedListFromArray = (arr: any[]): ListNode | null => {
  if (!arr.length) {
    return null;
  }

  const head: ListNode = new ListNode(arr[0]);
  if (arr.length > 1) {
    let cur: ListNode = head;
    for (let i = 1; i < arr.length; i++) {
      const newNode = new ListNode(arr[i]);
      cur.next = newNode;
      cur = newNode;
    }
  }
  return head;
};
