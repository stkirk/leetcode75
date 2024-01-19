import { ListNode } from "./ListNode";

export const logLinkedList = (head: ListNode | null): void => {
  const listArray: any[] = [];
  let cur: ListNode | null = head;
  while (cur) {
    listArray.push(cur.val);
    cur = cur.next;
  }
  console.log(listArray.join(" -> "));
};
