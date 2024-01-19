import { ListNode } from "../../Utils/ListNode";
import { createLinkedListFromArray } from "../../Utils/createLinkedListFromArray";
import { logLinkedList } from "../../Utils/logLinkedList";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  return new ListNode();
}

// test cases
const testList1 = createLinkedListFromArray([1, 2, 4]);
logLinkedList(testList1);
