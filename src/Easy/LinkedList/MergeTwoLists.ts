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
  let head: ListNode | null = null;
  let mergedList: ListNode = new ListNode();
  let cur1 = list1;
  let cur2 = list2;
  // while loop as long as there is a current node
  while (cur1 || cur2) {
    // get and compare values if both exist
    if (cur1 && cur2) {
      if (cur1.val <= cur2.val) {
        // if head is undefined assign head and newList to smaller value Node
        if (!head) {
          head = cur1;
          mergedList = head;
        } else {
          // assign and move along cur1
          mergedList.next = cur1;
          mergedList = mergedList.next;
        }
        cur1 = cur1.next;
      } else {
        // assign and move along cur2
        // if head is undefined assign head and newList to smaller value Node
        if (!head) {
          head = cur2;
          mergedList = head;
        } else {
          // assign and move along cur2
          mergedList.next = cur2;
          mergedList = mergedList.next;
        }
        cur2 = cur2.next;
      }
    } else {
      // edge case, only one list has nodes
      if (cur1) {
        if (!head) {
          head = cur1;
        } else {
          mergedList.next = cur1;
          mergedList = mergedList.next;
        }
        cur1 = cur1.next;
      } else if (cur2) {
        if (!head) {
          head = cur2;
        } else {
          mergedList!.next = cur2;
          mergedList = mergedList.next;
        }
        cur2 = cur2.next;
      }
    }
  }
  return head;
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
