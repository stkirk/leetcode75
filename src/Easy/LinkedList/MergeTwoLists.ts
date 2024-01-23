import { ListNode } from "../../Utils/ListNode";
import { createLinkedListFromArray } from "../../Utils/createLinkedListFromArray";
import { logLinkedList } from "../../Utils/logLinkedList";

// Given the heads of two sorted linked lists list1 and list2
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy: ListNode = new ListNode();
  let mergedList: ListNode = dummy;
  let cur1 = list1;
  let cur2 = list2;
  // while loop as long as there is a current node in both to compare
  while (cur1 && cur2) {
    if (cur1.val <= cur2.val) {
      // cur1 lower, tack onto mergedList and move pointers
      mergedList.next = cur1;
      mergedList = mergedList.next;
      cur1 = cur1.next;
    } else {
      // cur2 lowers, tack onto merged list and move pointers
      mergedList.next = cur2;
      mergedList = mergedList.next;
      cur2 = cur2.next;
    }
  }
  // while loop ended, only 1 or neither list has remaining nodes
  if (cur1) {
    mergedList.next = cur1;
  }
  if (cur2) {
    mergedList.next = cur2;
  }

  return dummy.next;
}

// test cases
const testList1 = createLinkedListFromArray([1, 2, 4]);
const testList2 = createLinkedListFromArray([1, 3, 4]);
const merged1 = mergeTwoLists(testList1, testList2);
logLinkedList(merged1); // [1 -> 1 -> 2 -> 3 -> 4 -> 4]

const testList3 = createLinkedListFromArray([]);
const testList4 = createLinkedListFromArray([]);
const merged2 = mergeTwoLists(testList3, testList4);
logLinkedList(merged2); // null

const testList5 = createLinkedListFromArray([]);
const testList6 = createLinkedListFromArray([0]);
const merged3 = mergeTwoLists(testList5, testList6);
logLinkedList(merged3); // [0]

const testList7 = createLinkedListFromArray([-10, -9, -6, -4, 1, 9, 9]);
const testList8 = createLinkedListFromArray([-5, -3, 0, 7, 8, 8]);
const merged4 = mergeTwoLists(testList7, testList8);
logLinkedList(merged4); // [-10,-9,-6,-5,-4,-3,0,1,7,8,8,9,9]
