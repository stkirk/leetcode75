import { ListNode } from "./ListNode";

export const logLinkedList = (head: ListNode | null): void => {
  if (head === null) {
    console.log(head);
    return;
  }
  const listArray: any[] = [];
  let cur: ListNode | null = head;
  while (cur) {
    listArray.push(cur.val);
    cur = cur.next;
  }
  console.log(listArray.join(" -> "));
};
